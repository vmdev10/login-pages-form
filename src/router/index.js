import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Presentation from "../views/login/Presentation.vue";
import Login from "../views/login/Login.vue";
import Register from "../views/login/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Presentation",
        component: Presentation,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
