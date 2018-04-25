'ues strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
    'app/view'
  ],
  dep: [
    'egg',
    'egg-scripts',
    'egg-view-react-ssr',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg-bin',
    'tslib',
    'typescript',
    'egg-webpack-react',
    'easywebpack-react',
    'babel-core',
    'babel-loader',
    'babel-plugin-add-module-exports',
    'babel-plugin-import',
    'babel-plugin-syntax-dynamic-import',
    'babel-plugin-transform-object-assign',
    'babel-plugin-transform-object-rest-spread',
    'babel-preset-env',
    'babel-preset-react',
    'cross-env',
    'imagemin-webpack-plugin',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
