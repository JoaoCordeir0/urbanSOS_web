import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { checkAuthAdmin, checkAuthUser } from "./hooks/useAuth"

import Dashboard from "./views/Dashboard.vue"
import Reports from "./views/Reports.vue"
import Report from "./views/Report.vue"
import Login from "./views/Login.vue"
import Adms from "./views/Adms.vue"
import Adm from "./views/Adm.vue"
import User from "./views/User.vue"
import NotFound from "./views/NotFound.vue"

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
    beforeEnter: checkAuthAdmin,
    component: Dashboard,
  },
  {
    path: "/reports",
    name: "Reports",
    beforeEnter: checkAuthAdmin,
    component: Reports,
  },
  {
    path: "/report/:id",
    name: "ReportsEdit",    
    beforeEnter: checkAuthAdmin,
    component: Report,
  },
  {
    path: "/adms",
    name: "Adms",
    beforeEnter: checkAuthAdmin,
    component: Adms,
  },
  {
    path: "/adm/:id",
    name: "Adm",
    beforeEnter: checkAuthAdmin,
    component: Adm,    
  },  
  {
    path: "/user/:id",
    name: "User",
    beforeEnter: checkAuthUser,
    component: User,
    meta: { layout: "empty" },
  },  
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { layout: "empty" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
