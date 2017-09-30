import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export const store =new Vuex.Store({
	state:{
		name: ""
	},
	getters,
	mutations,
	actions,
})