export default {
  getTitle: state => {
    return state.page_title
  },
  getPlans: state => {
    return state.plans
  },
  getTabs: state => {
    return state.tabs
  },
  getSystems: state => {
    return state.systems
  },
  getSubsystems: state => {
    return state.subsystems
  },
}