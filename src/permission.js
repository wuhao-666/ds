import router from "@/router";
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? process.env.VUE_APP_TITLE + ' - ' + to.meta.title : process.env.VUE_APP_TITLE;
  next();
});
