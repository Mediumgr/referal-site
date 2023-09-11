<template>
  <div>
    <TopBanner />
    <RulesInfo />
    <BonusSteps />
    <DetailedInfo />
    <SelectOption />
    <FeedbackSection />
    <FormData />
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import RulesInfo from "@/components/RulesInfo.vue";
import BonusSteps from "@/components/BonusSteps.vue";
import DetailedInfo from "@/components/DetailedInfo.vue";
import SelectOption from "@/components/SelectOption.vue";
import FeedbackSection from "@/components/FeedbackSection.vue";
import FormData from "@/components/FormData.vue";

export default {
  name: "MainPage",
  components: {
    TopBanner,
    RulesInfo,
    BonusSteps,
    DetailedInfo,
    SelectOption,
    FeedbackSection,
    FormData,
  },
};
</script>
