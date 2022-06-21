import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/WelcomePage.vue";
import ActusPost from "@/views/ActusPost.vue";
import AllPosts from "@/views/AllPosts.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import EditProfil from "@/views/EditProfil.vue";
import MyProfil from "@/views/MyProfil.vue";

// @ pour dire qu'on part du dossier racine, cad src //

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomePage,
  },
  {
    path: "/page01",
    name: "Post",
    component: Register,
  },
  {
    path: "/page02",
    name: "Posts",
    component: Login,
  },
  {
    path: "/page03",
    name: "Register",
    component: ActusPost,
  },
  {
    path: "/page04",
    name: "Login",
    component: AllPosts,
  },
  {
    path: "/page05",
    name: "EditProfil",
    component: EditProfil,
  },
  {
    path: "/page06",
    name: "MyProfil",
    component: MyProfil,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
