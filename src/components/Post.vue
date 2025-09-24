
<template>
  <div class="blog-post-page">
    <div class="container">
      <!-- Back Button -->
      <button @click="goBack" class="back-button">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span v-html="$t('post.backToBlog')"></span>
      </button>

      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p class="loading-text" v-html="$t('post.loadingPost')"></p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-container">
        <div class="error-card">
          <div class="error-icon">⚠️</div>
          <h3 class="error-title" v-html="$t('post.postNotFound')"></h3>
          <p class="error-message">{{ error }}</p>
          <button @click="goBack" class="error-back-button">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span v-html="$t('post.backToBlog')"></span>
          </button>
        </div>
      </div>

      <!-- Post Content -->
      <article v-else-if="post" class="post-article">
        <!-- Post Header -->
        <header class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
          
          <!-- Post Meta -->
          <div class="post-meta">
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>{{ post.author || $t('post.defaultAuthor') }}</span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
            <div v-if="post.updated_at !== post.created_at" class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              <span v-html="$t('post.updatedOn', { date: formatDate(post.updated_at) })"></span>
            </div>
            <!-- SEO URL Display -->
            <div v-if="post.slug" class="meta-item slug-display">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              <span class="slug-text">blog/{{ post.slug }}</span>
            </div>
          </div>

          <!-- Post Excerpt -->
          <div v-if="displayExcerpt" class="post-excerpt">
            {{ displayExcerpt }}
          </div>
        </header>

        <!-- Featured Image -->
        <div v-if="post.featured_image" class="featured-image-container">
          <img 
            :src="getImageUrl(post.featured_image)" 
            :alt="post.title"
            class="featured-image"
            loading="lazy"
            @error="handleImageError"
          />
        </div>

        <!-- Post Content -->
        <div class="post-content-card">
          <div 
            class="post-content" 
            v-html="sanitizedContent"
            ref="contentRef"
          ></div>
        </div>

        <!-- Enhanced Share Section -->
        <div class="share-section">
          <div class="share-container">
            <div class="share-header">
              <div class="share-text-content">
                <h3 class="share-title" v-html="$t('post.shareTitle')"></h3>
                <p class="share-subtitle" v-html="$t('post.shareSubtitle')"></p>
              </div>
            </div>

            <div class="share-buttons">
              <!-- Twitter Share -->
              <a 
                :href="shareUrls.twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn twitter-btn"
                :aria-label="$t('post.shareOnTwitter')"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label" v-html="$t('post.twitter')"></span>
                  <span class="btn-description" v-html="$t('post.shareOnX')"></span>
                </div>
              </a>

              <!-- Facebook Share -->
              <a 
                :href="shareUrls.facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn facebook-btn"
                :aria-label="$t('post.shareOnFacebook')"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label" v-html="$t('post.facebook')"></span>
                  <span class="btn-description" v-html="$t('post.shareWithFriends')"></span>
                </div>
              </a>

              <!-- LinkedIn Share -->
              <a 
                :href="shareUrls.linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn linkedin-btn"
                :aria-label="$t('post.shareOnLinkedIn')"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label" v-html="$t('post.linkedin')"></span>
                  <span class="btn-description" v-html="$t('post.shareProfessionally')"></span>
                </div>
              </a>

              <!-- Copy Link Button -->
              <button 
                @click="copyLink" 
                class="share-btn copy-btn"
                :class="{ 'copied': linkCopied }"
                :aria-label="$t('post.copyLinkToClipboard')"
              >
                <div class="btn-icon-wrapper">
                  <svg v-if="!linkCopied" class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <svg v-else class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label" v-html="linkCopied ? $t('post.copied') : $t('post.copyLink')"></span>
                  <span class="btn-description" v-html="linkCopied ? $t('post.linkCopiedToClipboard') : $t('post.copyToClipboard')"></span>
                </div>
              </button>
            </div>

            <!-- Share Stats -->
            <div class="share-stats">
              <p class="stats-text" v-html="$t('post.shareStatsText')"></p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch, nextTick, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'BlogPost',
  props: {
    slug: String
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    
    // Reactive data
    const post = ref(null)
    const loading = ref(true)
    const error = ref('')
    const linkCopied = ref(false)
    const contentRef = ref(null)
    const sanitizedContent = ref('')
    
    // Configuration
    const API_URL = 'https://www.hengongbet88.com/blog-api/api.php'
    
    // Get slug from props or route params
    const getSlug = () => {
      return props.slug || route.params.slug || route.query.slug
    }
    
    // Computed properties
    const displayExcerpt = computed(() => {
      if (!post.value) return ''
      return post.value.excerpt || post.value.meta_description || ''
    })

    const pageTitle = computed(() => {
      if (!post.value) return 'Blog Post'
      return post.value.meta_title || post.value.title
    })

    const pageDescription = computed(() => {
      if (!post.value) return ''
      return post.value.meta_description || 
             post.value.excerpt || 
             (post.value.content ? post.value.content.replace(/<[^>]*>/g, '').substring(0, 160) : '')
    })
    
    const shareUrls = computed(() => {
      if (!post.value) return {}
      
      const currentUrl = window.location.href
      const title = pageTitle.value
      const description = pageDescription.value
      
      return {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}${description ? `&url=${encodeURIComponent(currentUrl)}&via=` : `&url=${encodeURIComponent(currentUrl)}`}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}${description ? `&summary=${encodeURIComponent(description)}` : ''}`
      }
    })
    
    // SEO Meta Tags Update
    const updateMetaTags = () => {
      if (!post.value) return
      
      document.title = `${pageTitle.value}`
      
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', pageDescription.value)
      
      const ogTags = [
        { property: 'og:title', content: pageTitle.value },
        { property: 'og:description', content: pageDescription.value },
        { property: 'og:url', content: window.location.href },
        { property: 'og:type', content: 'article' },
        { property: 'article:author', content: post.value.author || 'HengOngBet Team' },
        { property: 'article:published_time', content: post.value.created_at }
      ]
      
      if (post.value.featured_image) {
        ogTags.push({ 
          property: 'og:image', 
          content: getImageUrl(post.value.featured_image) 
        })
      }
      
      ogTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[property="${tag.property}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('property', tag.property)
          document.head.appendChild(metaTag)
        }
        metaTag.setAttribute('content', tag.content)
      })
    }
    
    // Methods
    const formatDate = (dateString) => {
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      } catch (e) {
        return 'Invalid Date'
      }
    }
    
    const getImageUrl = (imagePath) => {
      if (!imagePath) return ''
      return imagePath.startsWith('http') ? imagePath : `https://www.hengongbet88.com/${imagePath}`
    }
    
    const handleImageError = (event) => {
      event.target.style.display = 'none'
    }
    
    const processContent = (content) => {
      if (!content) return ''
      
      return content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
        .replace(/on\w+\s*=\s*'[^']*'/gi, '')
        .replace(/javascript:/gi, '')
    }
    
    const loadBlogPost = async () => {
      const slug = getSlug()
      
      if (!slug) {
        error.value = 'No blog post specified'
        loading.value = false
        return
      }
      
      try {
        loading.value = true
        error.value = ''
        
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 15000)
        
        const response = await fetch(`${API_URL}?action=public_blog&slug=${encodeURIComponent(slug)}`, {
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.success && data.data) {
          post.value = data.data
          sanitizedContent.value = processContent(data.data.content)
          
          await nextTick()
          updateMetaTags()
        } else {
          throw new Error(data.error || 'Blog post not found')
        }
        
      } catch (err) {
        console.error('Error loading blog post:', err)
        if (err.name === 'AbortError') {
          error.value = 'Request timeout - please try again'
        } else {
          error.value = err.message
        }
      } finally {
        loading.value = false
      }
    }
    
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href)
        linkCopied.value = true
        setTimeout(() => {
          linkCopied.value = false
        }, 3000)
      } catch (err) {
        console.error('Failed to copy:', err)
        const textArea = document.createElement('textarea')
        textArea.value = window.location.href
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        linkCopied.value = true
        setTimeout(() => {
          linkCopied.value = false
        }, 3000)
      }
    }
    
    const goBack = () => {
      const locale = route.meta?.locale || 'en'
      const routeName = locale === 'en' ? 'Blog' : `Blog-${locale}`

      router.push({ name: routeName })
    }
    
    // Cleanup meta tags on unmount
    const cleanupMetaTags = () => {
      const metaTagsToClean = [
        'meta[name="description"]',
        'meta[property^="og:"]',
        'meta[property^="article:"]',
        'meta[name^="twitter:"]'
      ]
      
      metaTagsToClean.forEach(selector => {
        const tags = document.querySelectorAll(selector)
        tags.forEach(tag => {
          if (tag.getAttribute('data-vue-meta') !== 'true') {
            tag.remove()
          }
        })
      })
    }
    
    // Lifecycle hooks
    onMounted(() => {
      loadBlogPost()
    })
    
    onUnmounted(() => {
      cleanupMetaTags()
    })
    
    // Watch for route changes
    watch([() => route.params.slug, () => route.query.slug, () => props.slug], () => {
      if (getSlug()) {
        loadBlogPost()
      }
    })
    
    return {
      post,
      loading,
      error,
      linkCopied,
      shareUrls,
      sanitizedContent,
      contentRef,
      displayExcerpt,
      pageTitle,
      pageDescription,
      formatDate,
      getImageUrl,
      handleImageError,
      copyLink,
      goBack
    }
  }
}
</script>

<style scoped>
.blog-post-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #FFFFFF;
  background: #27272A;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 2rem;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

/* FIXED: Ensure all sections have consistent width */
.post-header,
.featured-image-container,
.post-content-card,
.share-section {
  width: 100%;
  box-sizing: border-box;
}

/* Back Button */
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  color: #27272A;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(240, 173, 60, 0.3);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 173, 60, 0.4);
}

.icon {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  width: 100%;
}

.spinner {
  border: 3px solid rgba(240, 173, 60, 0.2);
  border-top: 3px solid #F0AD3C;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: #A1A1AA;
  font-size: 1.125rem;
  margin: 0;
}

/* Error State */
.error-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
}

.error-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  max-width: 28rem;
  width: 100%;
  backdrop-filter: blur(10px);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-title {
  color: #F87171;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.error-message {
  color: #FCA5A5;
  margin: 0 0 1.5rem 0;
}

.error-back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error-back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

/* Post Article */
.post-article {
  width: 100%;
  box-sizing: border-box;
}

/* Post Header - FIXED */
.post-header {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  word-wrap: break-word;
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #A1A1AA;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.meta-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.meta-icon {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
  flex-shrink: 0;
  color: #F0AD3C;
}

/* Slug Display - FIXED */
.slug-display {
  background: rgba(240, 173, 60, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  border: 1px solid rgba(240, 173, 60, 0.3);
  align-self: center;
  max-width: 100%;
  overflow: hidden;
}

.slug-text {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.75rem;
  color: #F0AD3C;
  font-weight: 500;
  word-break: break-all;
}

.post-excerpt {
  background: rgba(240, 173, 60, 0.1);
  border-left: 4px solid #F0AD3C;
  padding: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  color: #D4D4D8;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}

/* Featured Image - FIXED */
.featured-image-container {
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.featured-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: block;
}

/* Post Content - FIXED */
.post-content-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.post-content {
  padding: 2rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #E4E4E7;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  box-sizing: border-box;
}

/* Content Deep Styles */
.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  margin: 2rem 0 1rem;
  font-weight: 600;
  word-wrap: break-word;
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: 100%;
}

.post-content :deep(h1) {
  font-size: 1.75rem;
  border-bottom: 2px solid #F0AD3C;
  padding-bottom: 0.5rem;
}

.post-content :deep(h2) {
  font-size: 1.5rem;
  border-bottom: 1px solid #F0AD3C;
  padding-bottom: 0.5rem;
}

.post-content :deep(h3) {
  font-size: 1.25rem;
}

.post-content :deep(p) {
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  color: #E4E4E7;
  width: 100%;
}

.post-content :deep(a) {
  color: #F0AD3C;
  text-decoration: none;
  font-weight: 500;
  word-wrap: break-word;
  transition: color 0.3s ease;
}

.post-content :deep(a:hover) {
  color: #FFD700;
  text-decoration: underline;
}

.post-content :deep(blockquote) {
  border-left: 4px solid #F0AD3C;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: rgba(240, 173, 60, 0.1);
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  color: #D4D4D8;
  width: 100%;
  box-sizing: border-box;
}

.post-content :deep(code) {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  color: #F0AD3C;
  word-wrap: break-word;
}

.post-content :deep(pre) {
  background: #18181B;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #E4E4E7;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-size: 0.875rem;
  width: 100%;
  box-sizing: border-box;
}

.post-content :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  padding-left: 2rem;
  margin: 1rem 0;
  color: #E4E4E7;
  width: 100%;
  box-sizing: border-box;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}

/* Enhanced Table Styles with HengOngBet Theme - FIXED */
.post-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.02);
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.post-content :deep(thead) {
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  color: #27272A;
  position: sticky;
  top: 0;
  z-index: 10;
}

.post-content :deep(thead tr) {
  background: transparent;
}

.post-content :deep(th) {
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(39, 39, 42, 0.3);
  border-right: 1px solid rgba(39, 39, 42, 0.2);
  position: relative;
  background: transparent;
  color: #27272A;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 120px;
  box-sizing: border-box;
}

.post-content :deep(th:last-child) {
  border-right: none;
}

.post-content :deep(tbody) {
  background: rgba(255, 255, 255, 0.02);
}

.post-content :deep(tbody tr) {
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.post-content :deep(tbody tr:nth-child(even)) {
  background: rgba(255, 255, 255, 0.02);
}

.post-content :deep(tbody tr:hover) {
  background: rgba(240, 173, 60, 0.1);
  transform: scale(1.005);
  box-shadow: 0 2px 8px rgba(240, 173, 60, 0.2);
}

.post-content :deep(tbody tr:last-child) {
  border-bottom: none;
}

.post-content :deep(td) {
  padding: 0.875rem 1.25rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  vertical-align: top;
  line-height: 1.6;
  color: #E4E4E7;
  font-size: 0.875rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 250px;
  min-width: 100px;
  box-sizing: border-box;
}

.post-content :deep(td:last-child) {
  border-right: none;
}

.post-content :deep(td p) {
  margin: 0;
  word-wrap: break-word;
  color: #E4E4E7;
}

.post-content :deep(td strong) {
  color: #F0AD3C;
  font-weight: 600;
}

.post-content :deep(td a) {
  color: #F0AD3C;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.post-content :deep(td a:hover) {
  color: #FFD700;
  text-decoration: underline;
}

.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: block;
}

/* Enhanced Share Section - FIXED */
.share-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
}

.share-container {
  background: linear-gradient(135deg, #F0AD3C 0%, #FFD700 100%);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(240, 173, 60, 0.3);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.share-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  pointer-events: none;
}

.share-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
}

.share-text-content {
  color: #27272A;
  width: 100%;
}

.share-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #27272A;
}

.share-subtitle {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
  color: #27272A;
}

.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(39, 39, 42, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1rem;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  background: rgba(39, 39, 42, 1);
  border-color: #F0AD3C;
}

.btn-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.share-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.btn-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
}

.btn-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: #FFFFFF;
}

.btn-description {
  font-size: 0.75rem;
  color: #A1A1AA;
}

/* Platform-specific button styles */
.twitter-btn .btn-icon-wrapper {
  background: #1da1f2;
  color: white;
}

.facebook-btn .btn-icon-wrapper {
  background: #4267b2;
  color: white;
}

.linkedin-btn .btn-icon-wrapper {
  background: #0077b5;
  color: white;
}

.copy-btn .btn-icon-wrapper {
  background: #6b7280;
  color: white;
}

.copy-btn.copied .btn-icon-wrapper {
  background: #10b981;
  color: white;
}

.copy-btn.copied .btn-label {
  color: #10b981;
}

.share-stats {
  margin-top: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
}

.stats-text {
  color: rgba(39, 39, 42, 0.8);
  font-size: 0.875rem;
  margin: 0;
}

/* Responsive Design - ENHANCED FIXES */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
  
  .post-title {
    font-size: 2.5rem;
  }
  
  .post-header {
    padding: 2.5rem;
  }
  
  .post-content {
    padding: 2.5rem;
    font-size: 1.125rem;
  }
  
  .post-meta {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .featured-image {
    height: 20rem;
  }
  
  .share-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .share-container {
    padding: 2.5rem;
  }
  
  .share-header {
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 2rem;
  }
  
  .post-title {
    font-size: 3rem;
  }
  
  .post-header {
    padding: 3rem;
  }
  
  .post-content {
    padding: 3rem;
    font-size: 1.125rem;
    line-height: 1.8;
  }
  
  .featured-image {
    height: 24rem;
  }
  
  .post-content :deep(h1) {
    font-size: 2rem;
  }
  
  .post-content :deep(h2) {
    font-size: 1.5rem;
  }
  
  .post-content :deep(h3) {
    font-size: 1.25rem;
  }
  
  .share-buttons {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .share-container {
    padding: 3rem;
  }
}

@media (min-width: 1280px) {
  .post-title {
    font-size: 2.5rem;
  }
  
  .featured-image {
    height: 28rem;
  }
  
  .share-buttons {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Mobile-specific adjustments - ENHANCED FIXES */
@media (max-width: 767px) {
  .share-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .share-container {
    padding: 1.5rem;
  }
  
  .share-title {
    font-size: 1.25rem;
  }

  .post-meta {
    align-items: center;
  }
  
  .slug-display {
    align-self: center;
    max-width: calc(100% - 2rem);
    word-break: break-all;
  }
  
.post-content :deep(table) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #F0AD3C rgba(255, 255, 255, 0.1);
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  
  /* Custom scrollbar for mobile tables */
  .post-content :deep(table)::-webkit-scrollbar {
    height: 8px;
  }
  
  .post-content :deep(table)::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  .post-content :deep(table)::-webkit-scrollbar-thumb {
    background: #F0AD3C;
    border-radius: 4px;
  }
  
  .post-content :deep(table)::-webkit-scrollbar-thumb:hover {
    background: #FFD700;
  }
  
  /* Preserve table structure and prevent text cutting */
  .post-content :deep(thead),
  .post-content :deep(tbody) {
    display: table-row-group;
  }
  
  .post-content :deep(tr) {
    display: table-row;
  }
  
  .post-content :deep(th),
  .post-content :deep(td) {
    display: table-cell;
    padding: 0.75rem 1rem;
    min-width: 150px; /* Increased minimum width */
    max-width: none; /* Remove max-width to prevent cutting */
    white-space: normal; /* Allow text wrapping */
    word-wrap: break-word;
    overflow-wrap: break-word;
    vertical-align: top;
    font-size: 0.8125rem;
    line-height: 1.4;
  }
  
  .post-content :deep(th) {
    padding: 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 160px; /* Slightly larger for headers */
    white-space: normal;
    word-wrap: break-word;
  }
  
  /* Remove text truncation styles */
  .post-content :deep(td) {
    text-overflow: initial; /* Remove ellipsis */
    overflow: visible; /* Show full content */
  }
  
  /* Enhanced scroll indicator */
  .post-content :deep(table)::after {
    content: "← Scroll horizontally to view all columns →";
    display: block;
    text-align: center;
    font-size: 0.75rem;
    color: #A1A1AA;
    padding: 0.75rem;
    font-style: italic;
    background: rgba(240, 173, 60, 0.05);
    margin-top: -1px;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Better hover effects for mobile */
  .post-content :deep(tbody tr:hover) {
    background: rgba(240, 173, 60, 0.15);
    transform: none;
    box-shadow: 0 2px 8px rgba(240, 173, 60, 0.3);
  }
  
  /* Ensure all elements fit within mobile width */
  .post-header,
  .featured-image-container,
  .post-content-card,
  .share-section {
    max-width: 100%;
    overflow-x: hidden;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.75rem;
  }
  
  .post-header {
    padding: 1.5rem;
  }
  
  .post-content {
    padding: 1.5rem;
  }
  
  .post-title {
    font-size: 1.5rem;
  }
  
  .share-container {
    padding: 1rem;
  }
  
  .btn-content {
    gap: 0.25rem;
  }
  
  .slug-text {
    font-size: 0.6875rem;
  }
  
  .post-content :deep(table) {
    font-size: 0.625rem;
  }
  
  .post-content :deep(th),
  .post-content :deep(td) {
    padding: 0.375rem 0.5rem;
    min-width: 60px;
    max-width: 120px;
  }
  
  /* Extra mobile width fixes */
  .meta-item {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .slug-display {
    max-width: calc(100% - 1rem);
    padding: 0.5rem;
  }
}

/* CRITICAL: Force all child elements to respect container width */
* {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Ensure no horizontal overflow */
.post-article * {
  box-sizing: border-box;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus States */
.back-button:focus,
.share-btn:focus,
.error-back-button:focus {
  outline: 2px solid #F0AD3C;
  outline-offset: 2px;
}
</style>