import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'


// import router vào 
import routerdddddd from './router'



//Đặt mấy cái tên ở đây không ảnh hưởng gì thì ở trong các component vẫn sử dụng là $route, và $store
createApp(App).use(routerdddddd).use(store).mount('#app')
