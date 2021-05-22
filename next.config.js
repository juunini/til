module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://til.juunini.xyz' : '',
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    };
    
    return config;
  },
};
