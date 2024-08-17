import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: false },
     
      component: () => import("./pages/HomePage.vue"),
    },
    // {
    //   path: "/feedback",
    //   name: "feedback",
    //   meta: { requiresAuth: true },
      
    //   component: () => import("./pages/Feedback.vue"),
    // },
    // {
    //   path: "/appmap",
    //   name: "appmap",
    //   meta: { requiresAuth: true },
     
    //   component: () => import("./pages/AppMap.vue"),
    // },
    // {
    //   path: "/search",
    //   name: "search",
    //   meta: { requiresAuth: true },
     
    //   component: () => import("./pages/SearchByArticle.vue"),
    // },
    
  ],
  
});


export default router;
