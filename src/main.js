import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import draggable from 'vuedraggable'
import {router} from './router'

const app = createApp(App)

app.use(Antd);
app.use(draggable);
app.use(router);
app.mount('#app')