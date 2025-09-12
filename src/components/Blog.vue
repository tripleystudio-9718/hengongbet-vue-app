<template>
  <div class="blog-container">
    <!-- Hero Header -->
    <header class="blog-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title" v-html="$t('blog.title')"></h1>
          <p class="hero-subtitle" v-html="$t('blog.subTitle')"></p>
        </div>
        
        <!-- Search Section -->
        <div class="search-wrapper">
          <div class="search-container">
            <div class="search-icon">🔍</div>
            <input
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              :placeholder="$t('blog.searchPlaceholder')"
              class="search-input"
            />
            <button @click="clearSearch" v-if="searchQuery" class="clear-btn">×</button>
          </div>
        </div>
      </div>
      
      <!-- Decorative Elements - Balanced on both sides -->
      <div class="hero-decoration">
        <!-- Left side cards -->
        <div class="decoration-card left-card-1"></div>
        <div class="decoration-card left-card-2"></div>
        <!-- Right side cards -->
        <div class="decoration-card right-card-1"></div>
        <div class="decoration-card right-card-2"></div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="blog-main">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-content">
          <div class="spinner"></div>
          <h3 v-html="$t('blog.loadingTitle')"></h3>
          <p v-html="$t('blog.loadingText')"></p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <div class="error-content">
          <div class="error-icon">⚠️</div>
          <h3 v-html="$t('blog.errorTitle')"></h3>
          <p>{{ error }}</p>
          <button @click="loadBlogs" class="retry-btn">
            <span class="btn-icon">🔄</span>
            <span v-html="$t('blog.tryAgain')"></span>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="paginatedBlogs.length === 0 && !loading" class="empty-state">
        <div class="empty-content">
          <div class="empty-icon">📝</div>
          <h3 v-html="searchQuery ? $t('blog.noArticlesFound') : $t('blog.noArticlesYet')"></h3>
          <p v-html="searchQuery ? $t('blog.tryAdjustingSearch') : $t('blog.checkBackSoon')"></p>
          <button v-if="searchQuery" @click="clearSearch" class="clear-search-btn" v-html="$t('blog.clearSearch')">
          </button>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else class="content-section">
        <!-- Results Info -->
        <div class="results-info">
          <p>
            <span class="results-count">{{ filteredBlogs.length }}</span>
            <span v-if="searchQuery" v-html="$t('blog.searchResults', { count: filteredBlogs.length, query: searchQuery })"></span>
            <span v-else v-html="$t('blog.articlesAvailable')"></span>
          </p>
        </div>

        <!-- Blog Grid -->
        <div class="blog-grid">
          <article
            v-for="blog in paginatedBlogs"
            :key="blog.id"
            class="blog-card"
            @click="openBlog(blog)"
          >
            <!-- Featured Image -->
            <div class="card-image-container">
              <img
                v-if="blog.featured_image"
                :src="getImageUrl(blog.featured_image)"
                :alt="blog.title"
                class="card-image"
                @error="handleImageError"
              />
              <div v-else class="card-image-placeholder">
                <div class="placeholder-icon">📄</div>
              </div>
              
              <!-- Category Badge -->
              <div class="category-badge">
                {{ getCategoryFromTitle(blog.title) }}
              </div>
            </div>
            
            <!-- Card Content -->
            <div class="card-content">
              <h2 class="card-title">{{ blog.title }}</h2>
              
              <div class="card-meta">
                <div class="meta-item">
                  <span class="meta-icon">👤</span>
                  <span>{{ blog.author || $t('blog.defaultAuthor') }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">📅</span>
                  <span>{{ formatDate(blog.created_at) }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">⏱️</span>
                  <span v-html="$t('blog.readTime', { minutes: getReadTime(blog.content) })"></span>
                </div>
              </div>
              
              <p class="card-excerpt">
                {{ blog.excerpt || getContentExcerpt(blog.content) }}
              </p>
              
              <div class="card-footer">
                <div class="read-more-btn">
                  <span v-html="$t('blog.readArticle')"></span>
                  <span class="arrow">→</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination-section">
          <div class="pagination">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage <= 1"
              class="page-btn prev-btn"
            >
              <span class="btn-icon">←</span>
              <span v-html="$t('blog.previous')"></span>
            </button>
            
            <div class="page-numbers">
              <button
                v-for="page in getVisiblePages()"
                :key="page"
                @click="changePage(page)"
                :class="['page-btn', 'page-number', { 
                  active: page === currentPage,
                  ellipsis: page === '...'
                }]"
                :disabled="page === '...'"
              >
                {{ page }}
              </button>
            </div>
            
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage >= totalPages"
              class="page-btn next-btn"
            >
              <span v-html="$t('blog.next')"></span>
              <span class="btn-icon">→</span>
            </button>
          </div>
          
          <div class="pagination-info">
            <span v-html="$t('blog.showingResults', { 
              start: ((currentPage - 1) * itemsPerPage) + 1,
              end: Math.min(currentPage * itemsPerPage, filteredBlogs.length),
              total: filteredBlogs.length
            })"></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogs: [],
      filteredBlogs: [],
      loading: true,
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 9,
      searchTimeout: null,
      pagination: {
        current_page: 1,
        total_pages: 1,
        total_blogs: 0,
        per_page: 10
      },
      apiUrl: 'https://www.hengongbet88.com/blog-api/api.php'
    }
  },
  
  computed: {
    totalPages() {
      return Math.ceil(this.filteredBlogs.length / this.itemsPerPage)
    },
    
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredBlogs.slice(start, end)
    }
  },
  
  watch: {
    searchQuery() {
      this.currentPage = 1
    }
  },

  mounted() {
    this.loadBlogs()
  },

  methods: {
    async loadBlogs(page = 1) {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch(`${this.apiUrl}?action=public_blogs&page=${page}&limit=50`)
        const data = await response.json()
        
        if (data.success) {
          this.blogs = data.blogs || []
          this.pagination = data.pagination || this.pagination
          this.filterBlogs()
        } else {
          throw new Error(data.error || this.$t('blog.loadError'))
        }
      } catch (error) {
        console.error('Error loading blogs:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    filterBlogs() {
      if (!this.searchQuery.trim()) {
        this.filteredBlogs = this.blogs
      } else {
        const query = this.searchQuery.toLowerCase()
        this.filteredBlogs = this.blogs.filter(blog =>
          blog.title.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          (blog.excerpt && blog.excerpt.toLowerCase().includes(query)) ||
          (blog.content && blog.content.toLowerCase().includes(query))
        )
      }
    },
    
    handleSearch() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.filterBlogs()
      }, 300)
    },
    
    clearSearch() {
      this.searchQuery = ''
      this.filterBlogs()
    },
    
    changePage(page) {
      if (page >= 1 && page <= this.totalPages && page !== '...') {
        this.currentPage = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    
    getVisiblePages() {
      const current = this.currentPage
      const total = this.totalPages
      const visible = []
      
      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          visible.push(i)
        }
      } else {
        visible.push(1)
        
        if (current <= 4) {
          for (let i = 2; i <= 5; i++) {
            visible.push(i)
          }
          visible.push('...')
          visible.push(total)
        } else if (current >= total - 3) {
          visible.push('...')
          for (let i = total - 4; i <= total; i++) {
            visible.push(i)
          }
        } else {
          visible.push('...')
          for (let i = current - 1; i <= current + 1; i++) {
            visible.push(i)
          }
          visible.push('...')
          visible.push(total)
        }
      }
      
      return visible
    },
    
    openBlog(blog) {
      if (this.$router) {
        try {
          this.$router.push({
            name: 'Post',
            params: { slug: blog.slug }
          })
        } catch (error) {
          this.$router.push(`/blog/${blog.slug}`)
        }
      } else {
        window.location.href = `/blog/${blog.slug}`
      }
    },
    
    getImageUrl(imagePath) {
      if (!imagePath) return ''
      return imagePath.startsWith('http') ? imagePath : `https://www.hengongbet88.com/${imagePath}`
    },
    
    handleImageError(event) {
      event.target.style.display = 'none'
      const placeholder = event.target.parentElement.querySelector('.card-image-placeholder')
      if (placeholder) {
        placeholder.style.display = 'flex'
      }
    },
    
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    
    getContentExcerpt(content) {
      if (!content) return this.$t('blog.defaultExcerpt')
      const text = content.replace(/<[^>]*>/g, '')
      return text.length > 120 ? text.substring(0, 120) + '...' : text
    },
    
    getReadTime(content) {
      if (!content) return 2
      const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
      return Math.max(1, Math.round(words / 200))
    },
    
    getCategoryFromTitle(title) {
      const categories = {
        'slot': this.$t('blog.categories.slots'),
        'casino': this.$t('blog.categories.casino'),
        'sport': this.$t('blog.categories.sports'),
        'bet': this.$t('blog.categories.betting'),
        'tip': this.$t('blog.categories.tips'),
        'guide': this.$t('blog.categories.guide'),
        'strategy': this.$t('blog.categories.strategy'),
        'bonus': this.$t('blog.categories.bonus'),
        'promo': this.$t('blog.categories.promotion')
      }
      
      const lowerTitle = title.toLowerCase()
      for (const [key, value] of Object.entries(categories)) {
        if (lowerTitle.includes(key)) {
          return value
        }
      }
      return this.$t('blog.categories.gaming')
    }
  }
}
</script>

<style scoped>
.blog-container {
  min-height: 100vh;
  background: #27272A;
  color: #FFFFFF;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Hero Section */
.blog-hero {
  position: relative;
  background: linear-gradient(135deg, #27272A 0%, #1F1F23 100%);
  padding: 3rem 2rem 2.5rem;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-text {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #A1A1AA;
  font-weight: 400;
  line-height: 1.5;
}

.search-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #71717A;
  font-size: 1rem;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.875rem 2.5rem 0.875rem 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(240, 173, 60, 0.2);
  border-radius: 40px;
  color: #FFFFFF;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.search-input::placeholder {
  color: #71717A;
}

.search-input:focus {
  border-color: #F0AD3C;
  box-shadow: 0 0 0 3px rgba(240, 173, 60, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(240, 173, 60, 0.2);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  color: #F0AD3C;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: rgba(240, 173, 60, 0.3);
}

/* Decorative Elements - Balanced */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

.decoration-card {
  position: absolute;
  background: linear-gradient(135deg, rgba(240, 173, 60, 0.08) 0%, rgba(240, 173, 60, 0.03) 100%);
  border: 1px solid rgba(240, 173, 60, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(8px);
}

/* Left side decorative cards */
.left-card-1 {
  width: 120px;
  height: 80px;
  top: 15%;
  left: 8%;
  transform: rotate(-12deg);
}

.left-card-2 {
  width: 100px;
  height: 60px;
  top: 45%;
  left: 5%;
  transform: rotate(18deg);
}

/* Right side decorative cards */
.right-card-1 {
  width: 130px;
  height: 85px;
  top: 10%;
  right: 8%;
  transform: rotate(15deg);
}

.right-card-2 {
  width: 110px;
  height: 70px;
  top: 40%;
  right: 5%;
  transform: rotate(-10deg);
}

/* Main Content */
.blog-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Loading, Error, Empty States */
.loading-state, .error-state, .empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 3rem 2rem;
}

.loading-content, .error-content, .empty-content {
  text-align: center;
  max-width: 400px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(240, 173, 60, 0.2);
  border-top: 3px solid #F0AD3C;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon, .empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.loading-content h3, .error-content h3, .empty-content h3 {
  color: #F0AD3C;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.loading-content p, .error-content p, .empty-content p {
  color: #A1A1AA;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.retry-btn, .clear-search-btn {
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  color: #27272A;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.retry-btn:hover, .clear-search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 173, 60, 0.3);
}

/* Content Section */
.content-section {
  padding: 2rem 0 3rem;
}

.results-info {
  margin-bottom: 1.5rem;
  text-align: center;
}

.results-info p {
  color: #A1A1AA;
  font-size: 0.95rem;
}

.results-count {
  color: #F0AD3C;
  font-weight: 600;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  border-color: rgba(240, 173, 60, 0.3);
}

.card-image-container {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .card-image {
  transform: scale(1.05);
}

.card-image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(240, 173, 60, 0.1) 0%, rgba(240, 173, 60, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 2.5rem;
  color: rgba(240, 173, 60, 0.4);
}

.category-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  color: #27272A;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: #A1A1AA;
}

.meta-icon {
  font-size: 0.8rem;
}

.card-excerpt {
  color: #D4D4D8;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: flex-start;
}

.read-more-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #F0AD3C;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.blog-card:hover .read-more-btn {
  gap: 0.6rem;
}

.arrow {
  transition: transform 0.3s ease;
}

.blog-card:hover .arrow {
  transform: translateX(3px);
}

/* Pagination */
.pagination-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #A1A1AA;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-btn:hover:not(:disabled):not(.ellipsis) {
  background: rgba(240, 173, 60, 0.1);
  border-color: rgba(240, 173, 60, 0.3);
  color: #F0AD3C;
}

.page-btn.active {
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  border-color: #F0AD3C;
  color: #27272A;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-btn.ellipsis {
  background: transparent;
  border: none;
  cursor: default;
}

.page-number {
  min-width: 40px;
  justify-content: center;
}

.pagination-info {
  text-align: center;
  color: #71717A;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .blog-hero {
    padding: 2.5rem 1rem 2rem;
  }
  
  .blog-main {
    padding: 0 1rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .search-container {
    max-width: 100%;
  }
  
  .search-input {
    padding: 0.75rem 2.25rem 0.75rem 2.25rem;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
  
  .page-numbers {
    order: -1;
  }
  
  .prev-btn, .next-btn {
    width: 100%;
    justify-content: center;
  }
  
  /* Hide decorative cards on mobile */
  .decoration-card {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .card-content {
    padding: 1.25rem;
  }
  
  .card-meta {
    flex-direction: column;
    gap: 0.4rem;
  }
}
</style>