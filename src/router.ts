import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { checkAuth } from "./hooks/useAuth";

import Dashboard from "./views/Dashboard.vue";
import Reports from "./views/Reports.vue";
import Login from "./views/Login.vue";
import Adms from "./views/Adms.vue";
import Blank from "./views/Blank.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: checkAuth,
    component: Dashboard,
  },
  {
    path: "/reports",
    name: "Reports",
    beforeEnter: checkAuth,
    component: Reports,
  },
  {
    path: "/report/:id",
    name: "ReportsEdit",    
    component: Blank,
  },
  {
    path: "/adms",
    name: "Adms",
    beforeEnter: checkAuth,
    component: Adms,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
