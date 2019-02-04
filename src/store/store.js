import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true,

	//对象，使我们需要的数据 存储数据
	state:{
		products:[
	        {name:"马云",price:200},
	        {name:"马化腾",price:140},
	        {name:"马冬梅",price:20},
	        {name:"马蓉",price:10}
	      ]
	},
	//用来计算state  调用方法 获取数据
	getters:{
		saleProducts: (state) =>{
			var saleProducts = state.products.map(product =>{
		        return {
		          name: "**" + product.name + "**",
		          price: product.price / 2
		        };
		    });
		    return saleProducts;
		}
	},
	//触发事件去改变数据
	mutations:{
		reducePrice: (state,payload) =>{
			// setTimeout(function(){
				state.products.forEach(product =>{
			        product.price -= payload;
			    })
		    // },3000);
		}
	},
	actions:{
		reducePrice:(context,payload) =>{
			setTimeout(function(){
				context.commit("reducePrice",payload);
			},2000);
		}
	}
});






