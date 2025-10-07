<template>
  <div>
    <div class="sport-live">
      <iframe src="https://4dnum.com" frameborder="0" allowfullscreen></iframe>
    </div>

    <!-- 4D Result Section -->
    <div class="why-download-section">
      <h1 class="section-title" v-html="$t('FDResult.Result.title')"></h1>

      <div class="section-description">
        <span v-html="$t('FDResult.Result.description_part1')"></span>
        <router-link :to="getLocalePath('/')" class="hengongbet-link">
          {{ $t('FDResult.Result.description_part2') }}
        </router-link>
        {{ $t('FDResult.Result.description_part3') }}
      </div>
    </div>
    <!-- What Section -->
    <div class="why-download-section">
      <h1 class="brand-tagline" v-html="$t('FDResult.What.title')"></h1>

      <div
        class="section-description"
        v-html="$t('FDResult.What.description_part1')"
      ></div>
      <div>
        <div
          class="section-description"
          v-html="$t('FDResult.What.description_part2')"
        ></div>
      </div>
    </div>
    <!--Why 4D matter -->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Why.title')"></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.Why.description_part1')"
      ></div>
      <div class="section-description">
        <ol class="game-list">
          <li v-for="(game, index) in whyList" :key="index" v-html="game"></li>
        </ol>
      </div>
    </div>

    <!-- 4D HengOngBet -->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.FDHOB.title')"></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.FDHOB.description_part1')"
      ></div>

      <div>
        <h3 class="section-title-3" v-html="$t('FDResult.FDHOB.title2')"></h3>

        <div class="section-description">
          <ol class="game-list">
            <li
              v-for="(game, index) in fDHOBList"
              :key="index"
              v-html="game"
            ></li>
          </ol>
        </div>
      </div>

      <div>
        <div
          class="section-description"
          v-html="$t('FDResult.FDHOB.description_part2')"
        ></div>
      </div>
    </div>

    <!-- Breakdown 4D-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Bdown.title')"></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.Bdown.description_part1')"
      ></div>
      <div class="benefits-table-container">
        <div class="benefits-table">
          <!-- 表头 -->
          <div class="table-header">
            <div class="table-cell">
              {{ $t("FDResult.Bdown.tableHeader.type") }}
            </div>
            <div class="table-cell">
              {{ $t("FDResult.Bdown.tableHeader.desc") }}
            </div>
            <div class="table-cell">
              {{ $t("FDResult.Bdown.tableHeader.example") }}
            </div>
          </div>

          <!-- 数据行 -->
          <div
            class="table-row"
            v-for="(row, key) in $tm('FDResult.Bdown.Bdownlist')"
            :key="key"
          >
            <div class="table-cell">{{ row.type }}</div>
            <div class="table-cell">{{ row.desc }}</div>
            <div class="table-cell">{{ row.example }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Example of a 4D Result Listing-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Example.title')"></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.Example.description_part1')"
      ></div>

      <div class="section-title" v-html="$t('FDResult.Example.title2')"></div>
      <div class="section-description">
        <ul class="game-list">
          <li
            v-for="(game, index) in exampleList"
            :key="index"
            v-html="game"
          ></li>
        </ul>
      </div>
      <div
        class="section-description"
        v-html="$t('FDResult.Example.description_part2')"
      ></div>
    </div>

    <!-- Tips Reading Result-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Tips.title')"></h2>

      <div class="section-description">
        <ul class="game-list">
          <li v-for="(game, index) in tipsList" :key="index" v-html="game"></li>
        </ul>
      </div>
    </div>

    <!-- Popular 4D Strategies-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Popular.title')"></h2>
      <div class="section-description">
        {{ $t('FDResult.Popular.description_part1') }}
        <router-link :to="getLocalePath('/games')" class="hengongbet-link">
          {{ $t('FDResult.Popular.game-link') }}
        </router-link>
        {{ $t('FDResult.Popular.description_part1-1') }}
      </div>

      <div class="section-title-3" v-html="$t('FDResult.Popular.title2')"></div>
      <div class="section-description">
        <ul class="game-list">
          <li v-for="(game, index) in hCNoList" :key="index" v-html="game"></li>
        </ul>
      </div>
      <div class="section-title-3" v-html="$t('FDResult.Popular.title3')"></div>
      <div
        class="section-description"
        v-html="$t('FDResult.Popular.description_part2')"
      ></div>
      <div class="section-description">
        <ul class="game-list">
          <li v-for="(game, index) in nPList" :key="index" v-html="game"></li>
        </ul>
      </div>
      <div class="section-title-3" v-html="$t('FDResult.Popular.title4')"></div>
      <div
        class="section-description"
        v-html="$t('FDResult.Popular.description_part3')"
      ></div>
      <div
        class="section-description"
        v-html="$t('FDResult.Popular.description_part4')"
      ></div>
    </div>

    <!-- Why check result 4D at HengOngBet-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Popular.title5')"></h2>

      <div class="section-description">
        <ul class="game-list">
          <li
            v-for="(game, index) in whyCheckList"
            :key="index"
            v-html="game"
          ></li>
        </ul>
      </div>
    </div>

    <!-- Responsible Play in 4D-->
    <div>
      <h2 class="section-title" v-html="$t('FDResult.Responsive.title')"></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.Responsive.description_part1')"
      ></div>

      <div class="section-description">
        <ul class="game-list">
          <li
            v-for="(game, index) in responsiveList"
            :key="index"
            v-html="game"
          ></li>
        </ul>
      </div>
      <div>
        <div
          class="section-description"
          v-html="$t('FDResult.Responsive.description_part2')"
        ></div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section">
      <h2 class="section-title-2" v-html="$t('FDResult.faqItems.title')"></h2>
    </div>
    <div class="accordion-container">
      <div v-for="(faq, index) in faqItems" :key="index" class="accordion-item">
        <button @click="toggleFaqItem(index)" class="accordion-trigger">
          <h3
            class="trigger-text"
            :class="{ 'text-active': openFaqItems[index] }"
            v-html="faq.question"
          ></h3>

          <div class="trigger-icon-wrapper">
            <!-- Use imported SVG icons -->
            <img
              :src="openFaqItems[index] ? closeIcon : openIcon"
              :alt="openFaqItems[index] ? 'Close' : 'Open'"
              class="trigger-icon-image"
            />
          </div>
        </button>

        <transition name="fade-slide">
          <div v-if="openFaqItems[index]" class="accordion-content">
            <div class="content-body">
              <p class="content-text" v-html="faq.answer"></p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Summary Section -->
    <div>
      <h2
        class="section-title text-center"
        v-html="$t('FDResult.Summary.title')"
      ></h2>
      <div
        class="section-description"
        v-html="$t('FDResult.Summary.description_part1')"
      ></div>
    </div>
  </div>
  <ResultAdditionalContent />
</template>

<script>
// Import the SVG icons
import openIcon from "@/assets/open-icon.svg";
import closeIcon from "@/assets/close-icon.svg";

export default {
  data() {
    return {
      openFaqItems: { 0: true }, // First FAQ item open by default
      // Make icons available to template
      openIcon,
      closeIcon,
    };
  },
  methods: {
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      const locale = this.$i18n?.locale || "en";
      if (locale === "en") {
        return path;
      }
      return `/${locale}${path}`;
    },

    toggleFaqItem(index) {
      this.openFaqItems = {
        ...this.openFaqItems,
        [index]: !this.openFaqItems[index],
      };
    },
  },
  computed: {
    whyList() {
      return [
        this.$t("FDResult.Why.WhyList.list-1"),
        this.$t("FDResult.Why.WhyList.list-2"),
        this.$t("FDResult.Why.WhyList.list-3"),
      ];
    },
    fDHOBList() {
      return [
        this.$t("FDResult.FDHOB.FDHOBList.list-1"),
        this.$t("FDResult.FDHOB.FDHOBList.list-2"),
        this.$t("FDResult.FDHOB.FDHOBList.list-3"),
        this.$t("FDResult.FDHOB.FDHOBList.list-4"),
      ];
    },
    exampleList() {
      return [
        this.$t("FDResult.Example.ExampleList.list-1"),
        this.$t("FDResult.Example.ExampleList.list-2"),
        this.$t("FDResult.Example.ExampleList.list-3"),
        this.$t("FDResult.Example.ExampleList.list-4"),
        this.$t("FDResult.Example.ExampleList.list-5"),
      ];
    },
    tipsList() {
      return [
        this.$t("FDResult.Tips.TipsList.list-1"),
        this.$t("FDResult.Tips.TipsList.list-2"),
        this.$t("FDResult.Tips.TipsList.list-3"),
      ];
    },
    hCNoList() {
      return [
        this.$t("FDResult.Popular.HCNoList.list-1"),
        this.$t("FDResult.Popular.HCNoList.list-2"),
      ];
    },
    nPList() {
      return [
        this.$t("FDResult.Popular.NPList.list-1"),
        this.$t("FDResult.Popular.NPList.list-2"),
        this.$t("FDResult.Popular.NPList.list-3"),
      ];
    },
    whyCheckList() {
      return [
        this.$t("FDResult.Popular.WhyCheckList.list-1"),
        this.$t("FDResult.Popular.WhyCheckList.list-2"),
        this.$t("FDResult.Popular.WhyCheckList.list-3"),
        this.$t("FDResult.Popular.WhyCheckList.list-4"),
      ];
    },
    responsiveList() {
      return [
        this.$t("FDResult.Responsive.ResponsiveList.list-1"),
        this.$t("FDResult.Responsive.ResponsiveList.list-2"),
        this.$t("FDResult.Responsive.ResponsiveList.list-3"),
      ];
    },
    faqItems() {
      return [
        {
          question: this.$t("FDResult.faqItems.items.safe.question"),
          answer: this.$t("FDResult.faqItems.items.safe.answer"),
        },
        {
          question: this.$t("FDResult.faqItems.items.both_platforms.question"),
          answer: this.$t("FDResult.faqItems.items.both_platforms.answer"),
        },
        {
          question: this.$t("FDResult.faqItems.items.latest_apk.question"),
          answer: this.$t("FDResult.faqItems.items.latest_apk.answer"),
        },
        {
          question: this.$t("FDResult.faqItems.items.permissions.question"),
          answer: this.$t("FDResult.faqItems.items.permissions.answer"),
        },
      ];
    },
  },
};
</script>

<style scoped>
.sport-live {
  top: 0;
  left: 0;
  height: 100vh;
  background: black;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sport-live iframe {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}

.content-box {
  max-width: 1280px;
  padding: 12px;
  margin: auto;
  text-align: center;
}

/* ===== SECTION 3: PROMOTION ADDITIONAL CONTENT ===== */
.additional-content-section {
  padding: 60px 20px;
  color: white;
}

.italic {
  font-style: italic;
}

/* Main Section Title (Largest) */
.main-section-title {
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 0 0 30px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Section Title (Medium) */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #f2b240;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.section-title-2 {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.section-title-3 {
  font-size: 24px;
  font-weight: 700;
  color: #f2b240;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Step Title (Smaller for Steps) */
.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #f2b240;
  text-align: center;
  margin: 30px 0 10px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Section Description */
.section-description {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin: 0 0 30px 0;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
}

.hengongbet-link {
  color: #f2b240;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.hengongbet-link:hover {
  color: #e5a535;
  text-decoration: underline;
}

/* Brand Tagline */
.brand-tagline {
  font-size: 24px;
  font-weight: 600;
  color: #f2b240;
  text-align: center;
  margin: 30px 0;
  line-height: 1.3;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Feature List and Game List */
.feature-list,
.game-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.feature-list li,
.game-list li {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.4;
  text-align: left;
  display: block;
  width: 100%;
}

.feature-list li::before,
.game-list li::before {
  content: "•";
  color: #f2b240;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: -2px;
}

/* Benefits Table Styles */
.benefits-table-container {
  width: 100%;
  overflow-x: auto;
  margin: 0 auto 40px auto;
  -webkit-overflow-scrolling: touch;
}

.benefits-table {
  background: #333;
  border-radius: 36px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-width: 600px;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: linear-gradient(180deg, #f1af3e 52.88%, #ed8f23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #f1af3e;
}

.table-row:last-child {
  border-bottom: none;
}

.table-cell {
  padding: 20px;
  text-align: center;
  color: #fff;
  border-right: 1px solid #f1af3e;
  background: linear-gradient(
    180deg,
    rgba(241, 175, 62, 0.1) 52.88%,
    rgba(237, 143, 35, 0.1) 100%
  );
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: 14px;
  line-height: 1.4;
}

.table-cell:last-child {
  border-right: none;
}

.table-header .table-cell {
  color: #000;
  font-weight: 700;
  font-size: 16px;
}

/* FAQ Styles - Accordion Design */
.faq-section {
  margin-bottom: 40px;
}

.accordion-container {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.accordion-item {
  background-color: #242424;
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.accordion-trigger:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  padding-right: 1rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  text-align: left;
}

.text-active {
  color: #f2b240;
}

.trigger-icon-wrapper {
  flex-shrink: 0;
  margin-left: 1rem;
}

.trigger-icon-image {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}

.trigger-icon-image:hover {
  transform: scale(1.1);
}

.accordion-content {
  padding: 0 1.25rem 0.5rem 1.25rem;
}

.content-body {
  border-radius: 0.5rem;
  padding: 1rem;
}

.content-text {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

/* Transition animations */
.fade-slide-enter-active {
  transition: all 0.3s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .additional-content-section {
    padding: 40px 15px;
  }

  .main-section-title {
    font-size: 36px;
    margin: 40px 0 25px 0;
  }

  .section-title {
    font-size: 28px;
    margin: 40px 0 15px 0;
  }

  .section-title-2 {
    font-size: 28px;
    margin: 40px 0 15px 0;
  }

  .step-title {
    font-size: 20px;
    margin: 25px 0 8px 0;
  }

  .section-description {
    font-size: 16px;
    padding: 0 10px;
  }

  .brand-tagline {
    font-size: 20px;
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  .main-section-title {
    font-size: 28px;
    margin: 30px 0 20px 0;
  }

  .section-title {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }

  .section-title-2 {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }

  .step-title {
    font-size: 18px;
    margin: 20px 0 6px 0;
  }

  .section-description {
    font-size: 15px;
    padding: 0 15px;
  }

  .brand-tagline {
    font-size: 18px;
    padding: 0 15px;
  }

  .feature-list li,
  .game-list li {
    font-size: 15px;
    padding-left: 20px;
  }

  .feature-list li::before,
  .game-list li::before {
    left: 0;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }

  .accordion-trigger {
    padding: 1rem 0.875rem;
  }

  .accordion-content {
    padding: 0 0.875rem 1rem 0.875rem;
  }

  .trigger-text {
    font-size: 0.95rem;
  }

  .content-body {
    padding: 0.875rem;
  }

  .content-text {
    font-size: 10px;
  }

  .trigger-icon-image {
    width: 14px;
    height: 14px;
  }

  .accordion-trigger {
    padding: 1.25rem 1rem;
  }

  .accordion-content {
    padding: 0 1rem 1.25rem 1rem;
  }

  .trigger-text {
    font-size: 14px;
    padding-right: 0.75rem;
  }

  .trigger-icon-image {
    width: 16px;
    height: 16px;
  }

  .benefits-table {
    border-radius: 10px;
  }

  .table-cell {
    padding: 12px 8px;
    font-size: 12px;
  }

  .table-header .table-cell {
    font-size: 13px;
  }

  .benefits-table {
    min-width: 320px;
  }
}

@media (max-width: 480px) {
  .main-section-title {
    font-size: 24px;
    margin: 25px 0 15px 0;
  }

  .section-title {
    font-size: 20px;
    margin: 25px 0 12px 0;
  }

  .section-title-2 {
    font-size: 20px;
    margin: 25px 0 12px 0;
  }

  .step-title {
    font-size: 16px;
    margin: 15px 0 5px 0;
  }

  .section-description {
    font-size: 10px;
    padding: 0 10px;
  }

  .brand-tagline {
    font-size: 16px;
    padding: 0 10px;
  }

  .feature-list li,
  .game-list li {
    font-size: 10px;
    padding-left: 12px;
  }

  .feature-list li::before,
  .game-list li::before {
    left: 0;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }

  .table-cell {
    padding: 10px 5px;
    font-size: 11px;
  }

  .table-header .table-cell {
    font-size: 12px;
  }

  .benefits-table {
    min-width: 280px;
  }
}
</style>
