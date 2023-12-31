import { createRouter, createWebHistory } from "vue-router";

//import views component
import Home from "../views/Home.vue";
import View from "../views/View.vue";
import NotFound from '../components/NotFound.vue'; 
import Map from '../views/Map.vue'
//Routes
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "view",
    path: "/view/:type/:element",
    component: View,
  },
  {
    name: "map",
    path: "/map",
    component: Map,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

//Init router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
