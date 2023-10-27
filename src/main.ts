import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

app.use(VueApexCharts);

app.use(router);

app.mount('#app');
