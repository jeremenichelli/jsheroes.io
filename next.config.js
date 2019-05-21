module.exports = {
  webpack: null,
  poweredByHeader: false,
  assetPrefix: '',
  target: 'serverless',
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    isProduction: process.env.NODE_ENV === 'production',
  },
};
