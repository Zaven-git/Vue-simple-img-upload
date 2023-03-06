<template>
  <div class="main-layout">
    <v-header />
    <tabs />
    <systems />
    <attachements />
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import Tabs from "./partial/Tabs.vue";
import Systems from "./partial/Systems.vue";
import Attachements from "./partial/Attachements.vue";

export default {
  name: "Index",
  components: {
    VHeader,
    Tabs,
    Systems,
    Attachements
  },
};
</script>
<style>
.main-layout {
  min-height: 170vh;
}
</style>
