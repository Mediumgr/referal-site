<template>
  <div class="home">
    <TopBanner/>
    <RulesInfo/>
    <BonusSteps/>
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import RulesInfo from "@/components/RulesInfo.vue";
import BonusSteps from "@/components/BonusSteps.vue";

export default {
  name: "MainPage",
  components: {
    TopBanner,
    RulesInfo,
    BonusSteps
  },
};
</script>
