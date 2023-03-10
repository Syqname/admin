import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'


import AdminUserEidt from '../views/AdminUserEidt.vue'
import AdminUserList from '../views/AdminUserList.vue'

import WebUserEidt from '../views/WebUserEidt.vue'
import WebUserList from '../views/WebUserList.vue'

import NoticeEidt from '../views/NoticeEidt.vue'
import NoticeList from '../views/NoticeList.vue'

import ThingEidt from '../views/ThingEidt.vue'
import ThingList from '../views/ThingList.vue'

import WarningEidt from '../views/WarningEidt.vue'
import WarningList from '../views/WarningList.vue'

import AdEidt from '../views/AdEidt.vue'
import AdList from '../views/AdList.vue'

import ItemEidt from '../views/ItemEidt.vue'
import ItemList from '../views/ItemList.vue'

import MaiList from '../views/MaiList.vue'

import Botany from '../views/Botany.vue'
import DemandList from '../views/DemandList.vue'


Vue.use(VueRouter)


const routes = [
  {path:'/login',name:'login',component:Login,meta:{isPublic:true}},
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/admin_users/create',component:AdminUserEidt},
      {path:'/admin_users/edit/:id',component:AdminUserEidt,props:true},
      {path:'/admin_users/list',component:AdminUserList},

      {path:'/web_users/create',component:WebUserEidt},
      {path:'/web_users/edit/:id',component:WebUserEidt,props:true},
      {path:'/web_users/list',component:WebUserList},

      {path:'/notices/create',component:NoticeEidt},
      {path:'/notices/edit/:id',component:NoticeEidt,props:true},
      {path:'notices/list',component:NoticeList},

      {path:'/things/create',component:ThingEidt},
      {path:'/things/edit/:id',component:ThingEidt,props:true},
      {path:'/things/list',component:ThingList},

      {path:'/warnings/create',component:WarningEidt},
      {path:'/warnings/edit/:id',component:WarningEidt,props:true},
      {path:'/warnings/list',component:WarningList},

      {path:'/ads/create',component:AdEidt},
      {path:'/ads/edit/:id',component:AdEidt,props:true},
      {path:'/ads/list',component:AdList},

      {path:'/items/create',component:ItemEidt},
      {path:'/items/edit/:id',component:ItemEidt,props:true},
      {path:'/items/list',component:ItemList},

      {path:'/mais/list',component:MaiList},

      {path:'/botanies/list',component:Botany},
      {path:'/demands/list',component:DemandList},
      





     

    ]

  },

]
const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
