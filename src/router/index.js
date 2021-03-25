import Vue from 'vue'
import Router from 'vue-router'
import First from "../../../vue_20210325/src/components/First";
import Second from "../../../vue_20210325/src/components/Second";
import UserDetail from "../../../vue_20210325/src/components/UserDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/first", component: First},
    {path: "/second", component: Second},
    {path: "/detail/:data", component: UserDetail},
    {path: "/", redirect: "/first"},
    {path: "/*", redirect: "/first"},
  ]
})
