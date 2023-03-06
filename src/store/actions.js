import { FETCH_TITLE, SET_TITLE, FETCH_PLANS, SET_PLANS, FETCH_TABS, SET_TABS, FETCH_SYSTEMS, SET_SYSTEMS, FETCH_SUB_SYSTEMS, SET_SUB_SYSTEMS } from './types'
import data from '../assets/test_data.json'

function makeActions ({ commit }, key, mutation_type) {
  return new Promise((resolve) => {
    if (key.includes('system')) {
      commit(mutation_type, data.tabs[2].data[key])
      resolve(data.tabs[2].data[key])
    } else {
      commit(mutation_type, data[key])
      resolve(data[key])
    }
  })
}
export default {
  [FETCH_TITLE] (context) {
    return makeActions(context, 'page_title', SET_TITLE)
  },
  [FETCH_PLANS] (context) {
    return makeActions(context, 'plans', SET_PLANS)
  },
  [FETCH_TABS] (context) {
    return makeActions(context, 'tabs', SET_TABS)
  },
  [FETCH_SYSTEMS] (context) {
    return makeActions(context, 'systems', SET_SYSTEMS)
  },
  [FETCH_SUB_SYSTEMS] (context) {
    return makeActions(context, 'subsystems', SET_SUB_SYSTEMS)
  },
}