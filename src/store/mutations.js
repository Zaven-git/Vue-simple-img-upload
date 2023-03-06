import { SET_TITLE, SET_PLANS, SET_TABS, SET_SYSTEMS, SET_SUB_SYSTEMS  } from "./types";

function makeMutations(state,payload,prop){
  state[prop] = payload;
}
export default {
  [SET_TITLE](state, payload) {
    makeMutations(state,payload,'page_title')
  },
  [SET_PLANS](state, payload) {
    makeMutations(state,payload,'plans')
  },
  [SET_TABS](state, payload) {
    makeMutations(state,payload,'tabs')
  },
  [SET_SYSTEMS](state, payload) {
    makeMutations(state,payload,'systems')
  },
  [SET_SUB_SYSTEMS](state, payload) {
    makeMutations(state,payload,'subsystems')
  },
}