module.exports = {
  css:{
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};  