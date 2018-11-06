

export const state = () => ({
    logs: []
})


export const mutations = {
    ADD_ERROR_LOG: (state, log) => {
      state.logs.push(log)
    }
}


export const  actions = {
    addErrorLog({ commit }, log) {
      commit('ADD_ERROR_LOG', log)
    }
}