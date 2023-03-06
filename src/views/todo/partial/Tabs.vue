<template>
  <b-tabs content-class="mt-3" class="mb-5 tab-container" @activate-tab="tabActivated">
    <b-tab
      v-for="tab in tabs"
      :title="tab.title"
      :key="`${tab.title}${uniqueId()}`"
    ></b-tab>
  </b-tabs>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FETCH_TABS } from "@/store/types";
import helper from '../../../mixins/helper';

export default {
  name: "Tabs",
  mixins:[helper],
  computed: {
    ...mapGetters({
      tabs: "getTabs"
    })
  },
  created() {
    this.fetchTabs();
  },
  methods: {
    ...mapActions({
      fetchTabs:FETCH_TABS,
    }),
    tabActivated(newTabIndex) {
      this.$router.push({ name: "todo", params: { id: newTabIndex } });
    }
  }
};
</script>

<style>
.tab-container .nav-link{
  border: unset!important;
  color: #D6DDDE!important;
  padding-bottom: 20px!important;
  opacity: 0.6;
}
.tab-container .nav-link.active{
  opacity: unset;
  color: #fff!important;
  background-color: unset!important;
  border: unset!important;
  border-bottom: 2px solid #18A7FF!important;
}
</style>