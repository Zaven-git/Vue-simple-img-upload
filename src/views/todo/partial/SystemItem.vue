<template>
  <div class="system-item">
    <b-container fluid class="system-item-info mb-2 position-relative">
      <b-row>
        <b-col cols="1" class="d-flex justify-content-start align-items-center ">
          <div v-if="iconClass.includes('down')" class="x-line" :style="`height:${52*count +25}px`"></div>
          <b-icon
            @click="openDropdown"
            :icon="`caret-${iconClass}-fill`"
            variant="light"
          ></b-icon>
        </b-col>
        <b-col cols="2" class="d-flex justify-content-start align-items-center">
          <span> {{ system.system_name }} </span>
        </b-col>
        <b-col cols="1" />
        <b-col cols="1" class="d-flex justify-content-start align-items-center">
          <span class="system-id"> {{ system.id }} </span>
        </b-col>
        <b-col
          cols="2"
          class="d-flex justify-content-center align-items-center"
        >
          <span class="date"> {{ system.created_date }} </span>
        </b-col>
        <b-col cols="1" />
        <b-col cols="1" class="d-flex justify-content-start align-items-center">
          <span class="active-liceses"> {{ system.active_licenses }} </span>
        </b-col>
        <b-col cols="3" class="buttons">
          <b-button variant="success">Add License</b-button>
          <b-button variant="danger ">Remove</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="pt-3 mb-1 system-titles" v-if="iconClass.includes('down')">
      <b-row>
        <b-col cols="3">
          <span class="licensis"> Licensis</span>
        </b-col>
        <b-col />
        <b-col cols="1">
          <span> Expires </span>
        </b-col>
        <b-col cols="2">
        </b-col>
        <b-col cols="2">
        </b-col>
        <b-col />
        <b-col />
      </b-row>
    </b-container>
    <template v-if="iconClass.includes('down')">
    <template v-for="subSystem in subSystems">
      <SubSystemItem :key="subSystem + uniqueId()" :subSystem="subSystem" />
    </template>
    </template>

  </div>
</template>

<script>
import SubSystemItem from "../partial/SubSystemItem.vue";
import { mapGetters,mapState } from "vuex";
import helper from '../../../mixins/helper'

export default {
  name: "SystemItem",
  mixins:[helper],
  components: {
    SubSystemItem
  },
  data() {
    return {
      iconClass: "right"
    };
  },
  props: {
    system: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters({
      subSystems: "getSubsystems"
    }),
    ...mapState({
      count: state => state.subsystems.length,
    }),
  },
  methods: {
    openDropdown() {
      this.iconClass = this.iconClass.includes("right") ? "down" : "right";
    }
  }
};
</script>

<style >
.system-item {
  color: #d6ddde;
}

.system-item-info {
  border-radius: 4px;
  background-color: #1a1c1e;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.system-item-info .col-1:first-of-type {
  width: 2.3333% !important;
}

.active-liceses {
  padding-left: 6px;
}
.date {
  padding-right: 20px;
}
.system-id {
  padding-left: 10px;
}
.buttons {
  margin-left: 50px !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0px !important;
}
.buttons button {
  padding: 2px 12px !important;
}
.buttons button:first-of-type {
  margin-right: 15px !important;
}
.x-line{
  position: absolute;
  top: 44px;
  left: 22px;
  width: 6px;
  background-color: #161819;
}
.licensis{
  margin-left: 55px;
}
</style>