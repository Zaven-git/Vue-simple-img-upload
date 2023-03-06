<template>
  <div class="v-header">
    <b-container fluid class="p-4 pb-5">
      <b-row>
        <b-col cols="3" class="title">{{ title }}</b-col>
        <b-col></b-col>
        <b-col>
          <b-row>
            <b-col></b-col>
            <b-col v-for="plan in plans" :key="plan.name + uniqueId()">
              <div
                class="position-relative"
                :class="[{ blured: !plan.active }]"
              >
                <component
                  :is="plan.name"
                  class="position-absolute"
                ></component>
                <span class="plan-name">{{ plan.name }}</span>
              </div>
            </b-col>
            <b-col><b-button variant="primary" size="sm">Upgrade Now</b-button></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_TITLE, FETCH_PLANS } from "../store/types";
import helper from "../mixins/helper";
import Free from "./icons/Free";
import Pro from "./icons/Pro";
import VIP from "./icons/VIP";

export default {
  name: "VHeader",
  mixins: [helper],
  components: {
    Free,
    Pro,
    VIP
  },
  created() {
    this.fetchTitles();
    this.fetchPlans();
  },
  methods: {
    ...mapActions({
      fetchTitles: FETCH_TITLE,
      fetchPlans: FETCH_PLANS
    })
  },
  computed: {
    ...mapGetters({
      title: "getTitle",
      plans: "getPlans"
    })
  }
};
</script>

<style>
.v-header .btn-primary {
  background-color: #18a7ff !important;
  width: 137px;
  height: 35px;
  font-weight: 500 !important;
  font-size: 16px !important;
}

.plan-name {
  top: 10px;
  right: 10px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  background-color: black;
  color: #d6ddde;
  width: 56px;
  height: 20px;
}
.blured {
  opacity: 0.25;
}
.blured .plan-name {
  background-color: rgba(20, 20, 20, 0.466) !important;
}
.title {
  font-size: 28px;
  color: #d6ddde;
}
</style>