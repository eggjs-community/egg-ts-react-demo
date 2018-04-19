import { Controller } from 'egg';

export default class SpaController extends Controller {
  async client() {
    const { ctx } = this;
    await ctx.renderClient('client.js', {title: 'asad'});
  }

  async redux() {
    const { ctx } = this;
    await ctx.renderClient('redux.js', {});
  }

  async ssr() {
    const { ctx } = this;
    await ctx.render('ssr.js', { url: ctx.url });
  }
}
