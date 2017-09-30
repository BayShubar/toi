import Vue from 'vue'
export default{
	setData(context){
		console.log("Suka")
		Vue.http.get('test').then(response=>{
			context.commit('setData', response.data);
		});
	},
}