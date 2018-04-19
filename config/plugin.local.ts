import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  webpack: {
    enable: true,
    package: 'egg-webpack',
  },
  webpackreact: {
    enable: true,
    package: 'egg-webpack-react',
  },
};

export default plugin;
