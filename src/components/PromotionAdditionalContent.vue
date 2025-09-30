<template>
  <div class="additional-content-section">
    <!-- Why Download Section -->
    <div class="why-download-section">
      <h1
        class="main-section-title"
        v-html="$t('Promotion.reward_player.title')"
      ></h1>
      <div class="section-description">
        {{ $t("Promotion.reward_player.description_part1") }}
        <span class="italic">
          {{ $t("Promotion.reward_player.description_part1_a") }}
        </span>
        {{ $t("Promotion.reward_player.description_part1_b") }}
        <router-link :to="getLocalePath('/')" class="hengongbet-link">{{
          $t("Promotion.reward_player.description_part2")
        }}</router-link
        >{{ $t("Promotion.reward_player.description_part3") }}
      </div>
      <h2
        class="brand-tagline"
        v-html="$t('Promotion.reward_player.title2')"
      ></h2>
      <div class="section-description">
        {{ $t("Promotion.reward_player.description_T2_part1") }}
        <div class="hengongbet-link">
          {{ $t("Promotion.reward_player.description_T2_part2") }}
        </div>
        {{ $t("Promotion.reward_player.description_T2_part3") }}
      </div>
      <h3
        class="brand-tagline"
        v-html="$t('Promotion.reward_player.title3')"
      ></h3>
      <ul class="feature-list">
        <li
          v-for="(feature, index) in promotionFeatures"
          :key="index"
          v-html="feature"
        ></li>
      </ul>
      <div
        class="section-description"
        v-html="$t('Promotion.reward_player.tagline')"
      ></div>
    </div>

    <!-- Categeories Promotion at HengOngBet-->
    <div class="installation-section">
      <h2 class="section-title" v-html="$t('Promotion.Categeories.title')"></h2>
      <div class="section-description">
        {{ $t("Promotion.Categeories.subtitle") }}
        <div class="grid grid-cols-3 gap-x-6 gap-y-3">
          <div>
            <h2 v-html="$t('Promotion.Categeories.OfferTitle')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in categeoriesList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
          <div>
            <h2 v-html="$t('Promotion.Categeories.MainBenefit')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in mainBenefitList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
          <div>
            <h2 v-html="$t('Promotion.Categeories.PlayerType')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in playerTypeList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="text-center"
        v-html="$t('Promotion.Categeories.subtitle-cat')"
      ></div>
    </div>

    <!-- 68% deposit bonus-->
    <div>
      <h2 class="section-title" v-html="$t('Promotion.Bonus.title')"></h2>
      <div class="section-description">
        <ul class="game-list">
          <li
            v-for="(game, index) in depositBonus"
            :key="index"
            v-html="game"
          ></li>
        </ul>
      </div>
      <div class="section-description">
        {{ $t("Promotion.Bonus.decsription_part1") }}
        <router-link :to="getLocalePath('/')" class="hengongbet-link">{{
          $t("Promotion.Bonus.description_part2")
        }}</router-link
        >{{ $t("Promotion.Bonus.description_part3") }}
      </div>
    </div>

    <!-- bonus Explain-->
    <div>
      <h2
        class="section-title"
        v-html="$t('Promotion.BonusExplain.title')"
      ></h2>
      <div
        class="section-description"
        v-html="$t('Promotion.BonusExplain.decsription_part1')"
      ></div>
      <div class="section-description">
        <ul class="game-list">
          <li
            v-for="(game, index) in depositBonus"
            :key="index"
            v-html="game"
          ></li>
        </ul>
      </div>
      <div>
        <div
          class="section-title"
          v-html="$t('Promotion.BonusExplain.title2')"
        ></div>

        <ul class="game-list">
          <li
            v-for="(game, index) in bonusExplainList"
            :key="index"
            v-html="game"
          ></li>
        </ul>
        <div
          class="section-description"
          v-html="$t('Promotion.BonusExplain.decsription_part2')"
        ></div>
      </div>
    </div>

    <!-- Top Up Rebate -->
    <h2 class="section-title" v-html="$t('Promotion.TopUpRebate.title')"></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.TopUpRebate.decsription_part1')"
    ></div>
    <div class="section-description">
      <ul class="game-list">
        <li
          v-for="(game, index) in topUpRebate"
          :key="index"
          v-html="game"
        ></li>
      </ul>
    </div>
    <div>
      <div
        class="section-description"
        v-html="$t('Promotion.TopUpRebate.decsription_part2')"
      ></div>
    </div>

    <!-- Daily Rebate -->
    <h2 class="section-title" v-html="$t('Promotion.DailyRebate.title')"></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.DailyRebate.decsription_part1')"
    ></div>
    <h4 class="section-title" v-html="$t('Promotion.DailyRebate.title2')"></h4>
    <div class="section-description">
      <ul class="game-list">
        <li
          v-for="(game, index) in dailyRebate"
          :key="index"
          v-html="game"
        ></li>
      </ul>
    </div>
    <div
      class="section-description"
      v-html="$t('Promotion.DailyRebate.decsription_part2')"
    ></div>

    <!-- Referral Rebate-->
    <h2
      class="section-title"
      v-html="$t('Promotion.ReferralRebate.title')"
    ></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.ReferralRebate.decsription_part1')"
    ></div>
    <div class="section-description">
      <ul class="game-list">
        <li
          v-for="(game, index) in referralRebate"
          :key="index"
          v-html="game"
        ></li>
      </ul>
    </div>
    <div
      class="section-description"
      v-html="$t('Promotion.ReferralRebate.decsription_part2')"
    ></div>

    <!-- Comparing Promotions-->
    <div class="installation-section">
      <h2 class="section-title" v-html="$t('Promotion.Comparing.title')"></h2>
      <div class="section-description">
        {{ $t("Promotion.Comparing.subtitle") }}
        <div class="flex grid grid-cols-3 gap-6">
          <div>
            <h2 v-html="$t('Promotion.Comparing.Promotion')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in promotionList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
          <div>
            <h2 v-html="$t('Promotion.Comparing.BestFeature')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in bestFeatureList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
          <div>
            <h2 v-html="$t('Promotion.Comparing.BestSuited')"></h2>
            <ul class="feature-list">
              <li
                v-for="(feature, index) in bestSuitedList"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Import Requrement -->
    <h2
      class="section-title text-center"
      v-html="$t('Promotion.Import.title')"
    ></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.Import.decsription_part1')"
    ></div>
    <h3 class="section-title" v-html="$t('Promotion.Import.title2')"></h3>
    <div>
      <ul class="feature-list">
        <li
          v-for="(feature, index) in importList"
          :key="index"
          v-html="feature"
        ></li>
      </ul>
    </div>
    <div>
      <div
        class="section-description"
        v-html="$t('Promotion.Import.decsription_part2')"
      ></div>
      <div
        class="section-description"
        v-html="$t('Promotion.Import.decsription_part3')"
      ></div>
    </div>

    <!-- Practical -->
    <h2
      class="section-title text-center"
      v-html="$t('Promotion.Practical.title')"
    ></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.Practical.decsription_part1')"
    ></div>
    <div>
      <ul class="feature-list">
        <li
          v-for="(feature, index) in practicalList"
          :key="index"
          v-html="feature"
        ></li>
      </ul>
    </div>
    <div
      class="section-description"
      v-html="$t('Promotion.Practical.decsription_part2')"
    ></div>

    <!-- Long Term Value -->
    <h2
      class="section-title text-center"
      v-html="$t('Promotion.LongTerm.title')"
    ></h2>
    <div
      class="section-description"
      v-html="$t('Promotion.LongTerm.decsription_part1')"
    ></div>
    <div>
      <ul class="feature-list">
        <li
          v-for="(feature, index) in longTermList"
          :key="index"
          v-html="feature"
        ></li>
      </ul>
    </div>
    <div
      class="section-description"
      v-html="$t('Promotion.LongTerm.decsription_part2')"
    ></div>

    <!-- Avoid Promotion -->
    <h2
      class="section-title text-center"
      v-html="$t('Promotion.AvoidPromotion.title')"
    ></h2>
    <div>
      <ul class="feature-list">
        <li
          v-for="(feature, index) in avoidPromotionList"
          :key="index"
          v-html="feature"
        ></li>
      </ul>
    </div>
    <div
      class="section-description"
      v-html="$t('Promotion.AvoidPromotion.decsription_part1')"
    ></div>

    <!-- FAQ Section -->
    <div class="faq-section">
      <h2 class="section-title-2" v-html="$t('Promotion.faq.title')"></h2>

      <div class="accordion-container">
        <div
          v-for="(faq, index) in faqItems"
          :key="index"
          class="accordion-item"
        >
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
    </div>

    <!-- Summary Section -->
    <div>
      <h2
        class="section-title text-center"
        v-html="$t('Promotion.Summary.title')"
      ></h2>
      <div
        class="section-description"
        v-html="$t('Promotion.Summary.decsription_part1')"
      ></div>
    </div>
  </div>
</template>

<script>
// Import the SVG icons
import openIcon from "@/assets/open-icon.svg";
import closeIcon from "@/assets/close-icon.svg";

export default {
  name: "AdditionalContent",
  data() {
    return {
      openFaqItems: { 0: true }, // First FAQ item open by default
      // Make icons available to template
      openIcon,
      closeIcon,
    };
  },
  computed: {
    promotionFeatures() {
      return [
        this.$t("Promotion.reward_player.Promotionfeatures.feature1"),
        this.$t("Promotion.reward_player.Promotionfeatures.feature2"),
        this.$t("Promotion.reward_player.Promotionfeatures.feature3"),
      ];
    },
    categeoriesList() {
      return [
        this.$t("Promotion.Categeories.CategeoriesList.list-1"),
        this.$t("Promotion.Categeories.CategeoriesList.list-2"),
        this.$t("Promotion.Categeories.CategeoriesList.list-3"),
        this.$t("Promotion.Categeories.CategeoriesList.list-4"),
        this.$t("Promotion.Categeories.CategeoriesList.list-5"),
      ];
    },
    mainBenefitList() {
      return [
        this.$t("Promotion.Categeories.MainBenefitList.list-1"),
        this.$t("Promotion.Categeories.MainBenefitList.list-2"),
        this.$t("Promotion.Categeories.MainBenefitList.list-3"),
        this.$t("Promotion.Categeories.MainBenefitList.list-4"),
        this.$t("Promotion.Categeories.MainBenefitList.list-5"),
      ];
    },
    playerTypeList() {
      return [
        this.$t("Promotion.Categeories.PlayerTypeList.list-1"),
        this.$t("Promotion.Categeories.PlayerTypeList.list-2"),
        this.$t("Promotion.Categeories.PlayerTypeList.list-3"),
        this.$t("Promotion.Categeories.PlayerTypeList.list-4"),
        this.$t("Promotion.Categeories.PlayerTypeList.list-5"),
      ];
    },
    depositBonus() {
      return [
        this.$t("Promotion.Bonus.DepositBonus.list-1"),
        this.$t("Promotion.Bonus.DepositBonus.list-2"),
      ];
    },
    bonusExplainList() {
      return [this.$t("Promotion.BonusExplain.BonusExplainList.list-1")];
    },
    topUpRebate() {
      return [
        this.$t("Promotion.TopUpRebate.list-1"),
        this.$t("Promotion.TopUpRebate.list-2"),
        this.$t("Promotion.TopUpRebate.list-3"),
      ];
    },
    dailyRebate() {
      return [
        this.$t("Promotion.DailyRebate.list-1"),
        this.$t("Promotion.DailyRebate.list-2"),
        this.$t("Promotion.DailyRebate.list-3"),
      ];
    },
    promotionList() {
      return [
        this.$t("Promotion.Comparing.PromotionList.list-1"),
        this.$t("Promotion.Comparing.PromotionList.list-2"),
        this.$t("Promotion.Comparing.PromotionList.list-3"),
        this.$t("Promotion.Comparing.PromotionList.list-4"),
        this.$t("Promotion.Comparing.PromotionList.list-5"),
      ];
    },
    bestFeatureList() {
      return [
        this.$t("Promotion.Comparing.BestFeatureList.list-1"),
        this.$t("Promotion.Comparing.BestFeatureList.list-2"),
        this.$t("Promotion.Comparing.BestFeatureList.list-3"),
        this.$t("Promotion.Comparing.BestFeatureList.list-4"),
        this.$t("Promotion.Comparing.BestFeatureList.list-5"),
      ];
    },
    bestSuitedList() {
      return [
        this.$t("Promotion.Comparing.BestSuitedList.list-1"),
        this.$t("Promotion.Comparing.BestSuitedList.list-2"),
        this.$t("Promotion.Comparing.BestSuitedList.list-3"),
        this.$t("Promotion.Comparing.BestSuitedList.list-4"),
        this.$t("Promotion.Comparing.BestSuitedList.list-5"),
      ];
    },
    importList() {
      return [
        this.$t("Promotion.Import.ImportList.list-1"),
        this.$t("Promotion.Import.ImportList.list-2"),
        this.$t("Promotion.Import.ImportList.list-3"),
      ];
    },
    practicalList() {
      return [
        this.$t("Promotion.Practical.PracticalList.list-1"),
        this.$t("Promotion.Practical.PracticalList.list-2"),
        this.$t("Promotion.Practical.PracticalList.list-3"),
        this.$t("Promotion.Practical.PracticalList.list-4"),
      ];
    },
    longTermList() {
      return [
        this.$t("Promotion.LongTerm.LongTermList.list-1"),
        this.$t("Promotion.LongTerm.LongTermList.list-2"),
        this.$t("Promotion.LongTerm.LongTermList.list-3"),
      ];
    },
    avoidPromotionList() {
      return [
        this.$t("Promotion.AvoidPromotion.AvoidPromotionList.list-1"),
        this.$t("Promotion.AvoidPromotion.AvoidPromotionList.list-2"),
        this.$t("Promotion.AvoidPromotion.AvoidPromotionList.list-3"),
      ];
    },
    benefitsComparison() {
      return [
        {
          feature: this.$t("download.benefits.table.rows.touchscreen.feature"),
          app: this.$t("download.benefits.table.rows.touchscreen.app"),
          website: this.$t("download.benefits.table.rows.touchscreen.website"),
        },
        {
          feature: this.$t("download.benefits.table.rows.biometric.feature"),
          app: this.$t("download.benefits.table.rows.biometric.app"),
          website: this.$t("download.benefits.table.rows.biometric.website"),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.notifications.feature"
          ),
          app: this.$t("download.benefits.table.rows.notifications.app"),
          website: this.$t(
            "download.benefits.table.rows.notifications.website"
          ),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.exclusive_promotions.feature"
          ),
          app: this.$t("download.benefits.table.rows.exclusive_promotions.app"),
          website: this.$t(
            "download.benefits.table.rows.exclusive_promotions.website"
          ),
        },
        {
          feature: this.$t("download.benefits.table.rows.home_screen.feature"),
          app: this.$t("download.benefits.table.rows.home_screen.app"),
          website: this.$t("download.benefits.table.rows.home_screen.website"),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.rebate_alerts.feature"
          ),
          app: this.$t("download.benefits.table.rows.rebate_alerts.app"),
          website: this.$t(
            "download.benefits.table.rows.rebate_alerts.website"
          ),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.affiliate_tools.feature"
          ),
          app: this.$t("download.benefits.table.rows.affiliate_tools.app"),
          website: this.$t(
            "download.benefits.table.rows.affiliate_tools.website"
          ),
        },
        {
          feature: this.$t("download.benefits.table.rows.gameplay.feature"),
          app: this.$t("download.benefits.table.rows.gameplay.app"),
          website: this.$t("download.benefits.table.rows.gameplay.website"),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.offline_preview.feature"
          ),
          app: this.$t("download.benefits.table.rows.offline_preview.app"),
          website: this.$t(
            "download.benefits.table.rows.offline_preview.website"
          ),
        },
        {
          feature: this.$t(
            "download.benefits.table.rows.wallet_integration.feature"
          ),
          app: this.$t("download.benefits.table.rows.wallet_integration.app"),
          website: this.$t(
            "download.benefits.table.rows.wallet_integration.website"
          ),
        },
      ];
    },
    faqItems() {
      return [
        {
          question: this.$t("Promotion.faq.items.safe.question"),
          answer: this.$t("Promotion.faq.items.safe.answer"),
        },
        {
          question: this.$t("Promotion.faq.items.both_platforms.question"),
          answer: this.$t("Promotion.faq.items.both_platforms.answer"),
        },
        {
          question: this.$t("Promotion.faq.items.latest_apk.question"),
          answer: this.$t("Promotion.faq.items.latest_apk.answer"),
        },
        {
          question: this.$t("Promotion.faq.items.permissions.question"),
          answer: this.$t("Promotion.faq.items.permissions.answer"),
        },
      ];
    },
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
};
</script>

<style scoped>
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
  max-width: 800px;
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
  grid-template-columns: 2fr 1fr 1fr;
  background: linear-gradient(180deg, #f1af3e 52.88%, #ed8f23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
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
