<template>
  <b-container fluid class="p-4 pt-0">
    <b-row>
      <b-col cols="1">
        <span> Systems </span>
      </b-col>
      <b-col />
    </b-row>
    <b-container fluid class="pt-3 system-titles">
      <b-row>
        <b-col cols="2">
          <span> System Name </span>
        </b-col>
        <b-col />
        <b-col cols="1">
          <span> ID </span>
        </b-col>
        <b-col cols="2">
          <span> Created date </span>
        </b-col>
        <b-col cols="2">
          <span> Active Licenses </span>
        </b-col>
        <b-col />
        <b-col />
      </b-row>
    </b-container>
    <template v-for="system in systems">
      <system-item :system="system" :key="system.id + uniqueId()" />
    </template>
  </b-container>
</template>

<script>
import SystemItem from "./SystemItem.vue";
import { FETCH_SYSTEMS, FETCH_SUB_SYSTEMS } from "@/store/types";
import { mapGetters,mapActions } from "vuex";
import helper from "../../../mixins/helper";

export default {
  name: "Systems",
  mixins: [helper],
  components: {
    SystemItem
  },
  computed: {
    ...mapGetters({
      systems: "getSystems"
    })
  },
  created() {
    this.fetchSystems();
    this.fetchSubSystems();
  },
    methods:{
    ...mapActions({
      fetchSystems:FETCH_SYSTEMS,
      fetchSubSystems:FETCH_SUB_SYSTEMS,
    })
  },
};
</script>

<style>
span {
  color: #d6ddde;
  font-size: 16px;
}
.system-titles {
  opacity: 0.6;
}
.system-titles span {
  font-size: 12px;
}
</style>