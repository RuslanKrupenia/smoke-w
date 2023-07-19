import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CatalogPage from "@/views/CatalogPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:HomePage, alias:'/'},
        {path:'/catalog', component:CatalogPage},
    ],
    scrollBehavior(to) {
        if (to.hash) {
          return {
            el: to.hash,
            top: 100,
          }
        }
        else{
            return{
                top:0
            }
        }
    },
})