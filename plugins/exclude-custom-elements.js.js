export default {
  install(app) {
    app.config.compilerOptions.isCustomElement = (tag) =>
      tag.startsWith('swiper-');
  },
};
