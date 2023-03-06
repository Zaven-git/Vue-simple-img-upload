<template>
  <div>
    <b-container fluid class="mb-2 sub-system-item-info position-relative">
      <b-row>
        <b-col cols="1" class="line-box">
          <div class="y-line"></div>
        </b-col>
        <b-col cols="3" class="d-flex justify-content-start align-items-center">
          <span> {{ subSystem.licenses }} </span>
        </b-col>
        <b-col cols="1" />
        <b-col cols="6" class="d-flex justify-content-start align-items-center p-0">
          <span> {{ subSystem.expires }} </span>
        </b-col>
        <b-col
          class="d-flex justify-content-end align-items-center px-4"
        >
          <span> Download </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "SubSystemItem",
  props: {
    subSystem: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>

<style >
.sub-system-item-info {
  border-radius: 4px;
  background-color: #1a1c1e;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4% !important;
  width: 96% !important;
}
.line-box{
  width: 1%!important;
  padding: 0!important;
}
.y-line {
  position: absolute;
  top: 19px;
  left: -29px;
  width: 29px;
  height: 6px;
  background-color: #161819;

}
</style>