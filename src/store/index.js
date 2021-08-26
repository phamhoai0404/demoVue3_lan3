import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			count: 1000,
			transaction: null,
			numbers:[1,2,34,5 ]
		};
	},

	// Sử dụng khi thay đổi dữ liệu ở trong state mà được dùng ở nhiều nơi thì làm ở đây cho nó tiện
	//  không thì không cần làm ở đây cũng được 
	getters:{
		filterNumber(state){
			return state.numbers.filter(item => item %2 == 0);
		}
	},
	mutations: {
		setOneData(state, data) {
			state.transaction = data;
		},
	},
	actions: {
		//Cái này mặc định chỉ có 2  thuộc tính truyền vào thôi
		// fetchTranssaction( store, gido){ ... }
		// Nhưng mà thường viết rõ ràng ra mình đối tượng

		//Cái tên { commit } - chữ commit phải viết đúng nhá không được sai đâu
		async fetchTranssaction({ commit },  id ) {
			console.log(" vào đây---------");
			const respone = await fetch("http://localhost:3000/listdata/" + id);
			const data = await  respone.json();
			console.log(data);
			commit("setOneData", data);
		},
	},
});

export default store;
