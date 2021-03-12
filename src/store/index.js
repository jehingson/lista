import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: {
      titulo: '',
      estado: false,
      color: 'primary'
    },
    roles: []
  },
  mutations: {
    mostrarLoader(state, payload){
      state.loading.titulo = payload.titulo
      state.loading.color = payload.color
      state.loading.estado = true
    },
    ocultarLoading(state){
      state.loading.estado = false
    },
    productionROLES(state, DATA){
      state.roles = DATA
    }
  },
  actions: {
    obtenerRoles: async function({commit}){
      const res = await fetch('productos.json')
      console.log(res)
      const DATA = await res.json()
      commit('productionROLES', DATA)
    }
  },
  modules: {}
});
