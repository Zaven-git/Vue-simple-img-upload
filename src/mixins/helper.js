import {v1} from "uuid";

export default {
  methods:{
    uniqueId() {
      return v1();
    },
  }
}