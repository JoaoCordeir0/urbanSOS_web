import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Reports from "./views/Reports.vue";
import Login from "./views/Login.vue";
import Adms from "./views/Adms.vue";
import Blank from "./views/Blank.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/reports",
    name: "Reports",
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
