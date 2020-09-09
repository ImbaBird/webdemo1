const user = {
  state: {
    show: false,
    repair: false
  },
  mutations: {
    vuex_resetShow(state, msg) {
      debugger
      state.show = msg;
      console.log("1" + state.show)
    },
    vuex_resetRepair(state, msg) {
      debugger
      state.repair = msg;
      console.log("1" + state.repair)
    }
  }
}

export default user
