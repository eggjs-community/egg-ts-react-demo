import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  reactssr: {
    enable: true,
    package: 'egg-view-react-ssr',
  },
};

export default plugin;
