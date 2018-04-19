import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/home', controller.home.index);
  router.get('/redux(/.+)?', app.controller.spa.redux);
  router.get('/client(/.+)?', app.controller.spa.client);
  router.get('/ssr(/.+)?', app.controller.spa.ssr);
};
