import { createApp } from 'vue'
import App from './App.vue'
// import { FontAwesomeIcon } from './plugins/font-awesome'
// import './index.css'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'element-plus/dist/index.css'

import draggable from 'vuedraggable'
import { router } from './router'
import ElementPlus from 'element-plus'
import store from './store'

const app = createApp(App)

// app.use(Antd);
app.use(ElementPlus)
app.use(draggable);
app.use(router);
app.use(store);

app.mount('#app')

export { app }