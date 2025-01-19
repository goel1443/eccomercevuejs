import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import OtpVerification from "../views/auth/OtpVerification.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/productdetail",
    name: "productdetail",
    component: ProductDetail,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword,
  },
  ,
  {
    path: "/otpverification",
    name: "otpverification",
    component: OtpVerification,
  },
  {
    path: "/resetpassword",
    name: "resetpassword",
    component: ResetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
