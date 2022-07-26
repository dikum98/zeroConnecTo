const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcss([
      // require('cssnano'),
      require('postcss-combine-media-query'),
    ]),
    postcssPresetEnv({
      stage: 0,
      minimumVendorImplementations: 2, // 벤더 프리픽서 붙여주는거
      autoprefixer: { grid: true },
      browsers: 'last 2 versions',
    }),
  ],
};
