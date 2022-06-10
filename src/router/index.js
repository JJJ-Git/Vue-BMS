import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    // console.log("滚动", to)
    // console.log("滚动", from)
    // console.log("滚动", savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0,
        behavior: "smooth",
      }
    }
  },
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HomePage",
      component: () => import("@/views/HomePage"),
    },
    {
      path: "/login/:id",
      name: "LoginPage",
      component: () => import("@/views/LoginPage"),
      children: [
        {
          path: "",
          component: () => import("@/views/LoginChildren"),
        },
        {
          path: "register",
          component: () => import("@/views/LoginRegisterPage"),
        },
        {
          path: "forgetPassword",
          component: () => import("@/views/LoginForgetPassword"),
        },
      ],
    },
    {
      path: "/mixin",
      name: "MixinPage",
      component: () => import("@/views/MixinPage"),
    },
    {
      path: "/functionTest",
      name: "FunctionTest",
      component: () => import("@/views/FunctionTest"),
    },
  ],
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   if (to.name === "HomePage") {
//     next({ path: "/login/aaa" })
//   } else {
//     next()
//   }
// })

// router.afterEach((to, from) => {
//   console.log(to)
//   console.log(from)
// })

export default router
