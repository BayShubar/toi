import Vue from 'vue'
export default{
	setData(context){
		Vue.http.get('test').then(response=>{
			context.commit('setData', response.data);
		});
	},
}