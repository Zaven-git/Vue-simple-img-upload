<template>
  <div>
    <b-container fluid class="p-4">
      <b-row>
        <b-col cols="2">
          <span> Add System </span>
        </b-col>
        <b-col />
      </b-row>
    </b-container>
    <div class="atachements-box">
      <div class="attach-icon-box">
        <arrow-down />
        <square />
      </div>
      <div class="attach-text">
        <span @click="attahcFile"> Choose a file</span>
        to upload or drag it here <br />
        (jpg, png, max size 5mb)
      </div>
      <template v-if="attachements.length">
        <div class="attach-img-container">
          <div class="attach-img-box" v-for="attachement in attachements" :key="attachement.id">
            <img :src="attachement.src" alt="" />
            <b-icon
              @click="deleteAttachement(attachement.id)"
              icon="x-circle-fill"
              variant="danger"
              class="delete-icon"
            ></b-icon>
          </div>
        </div>
      </template>

      <span class="error">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import ArrowDown from "../../../components/icons/Arrow-down.vue";
import Square from "../../../components/icons/Square.vue";
import helper from '../../../mixins/helper';

export default {
  name: "Attachements",
  components: { ArrowDown, Square },
  mixins:[helper],
  data() {
    return {
      attachements: [],
      errorMessage: ""
    };
  },
  methods: {
    attahcFile() {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.click();

      input.onchange = () => {
        const file = input.files[0];
        // const imageTypes = ["image/jpg", "image/jpeg", "image/png"];
        // if (!imageTypes.includes(file.type)) {
        //   this.errorMessage =
        //     "File type is not allowed(Allowed file extensions: .jpg, .jpeg, .png, .bmp )";
        // } else {
          const reader = new FileReader();
          reader.addEventListener(
            "loadend",
            () => {
              this.attachements.push({ src: reader.result, id: this.uniqueId() });
            },
            false
          );
          reader.readAsDataURL(file);
          this.errorMessage = '';
        // }
      };
    },
    deleteAttachement(id) {
      this.attachements = this.attachements.filter(el => el.id !== id);
    }
  }
};
</script>

<style scoped>
.atachements-box {
  border: 1px dashed #d6ddde;
  margin: 0 33px;
}
.attach-icon-box {
  position: relative;
  width: 100%;
  padding: 90px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.attach-icon-box svg:first-of-type {
  position: absolute;
  top: 100px;
  left: 49.25%;
}
.attach-text {
  text-align: center;
  color: #d6ddde;
}
.attach-text span {
  cursor: pointer;
  color: #18a7ff;
}
.error {
  color: red;
  display: block;
  text-align: center;
  margin-top: 10px;
}
.attach-img-container {
  display: flex;
  margin-top: 30px;
}
.attach-img-box {
  position: relative;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  margin-right: 15px;
  background-color: #161819;
  padding: 0px 10px;
}
.attach-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.delete-icon {
  position: absolute;
  top: -10px;
  right: -5px;
  cursor: pointer;
}
</style>