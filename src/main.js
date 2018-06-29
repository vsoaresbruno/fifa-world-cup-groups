// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import { Model } from 'vue-api-query';
import VueMoment from 'vue-moment';
import App from './App';
import Results from './components/Results';
import GroupResults from './components/GroupResults';
import MatchesTomorrow from './components/MatchesTomorrow';

Model.$http = axios;

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMoment);

const routes = [
    { path: '/results', component: Results },
    { path: '/group-results', component: GroupResults },
    { path: '/matches-tomorrow', component: MatchesTomorrow }
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
    router
}).$mount('#app');
