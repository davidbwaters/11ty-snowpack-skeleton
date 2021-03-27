module.exports = {
  mount: {
    build: { url: '/', static: true },
    scripts: { url: '/scripts' },
    stylesheets: { url: '/stylesheets' },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {
    hmrDelay: 600,
  },
  buildOptions: {
    clean: true,
    out: 'dist'
  },
};
