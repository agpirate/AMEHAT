// config/environment.js
const env = {
    development: {
      API_BASE_URL: 'http://196.190.43.162',
      LOG_LEVEL: 'debug',
    },
    production: {
      API_BASE_URL: 'http://196.190.43.162',
      LOG_LEVEL: 'error',
    },

      // social media & contact address
      website:'http://196.190.43.162:89',
      websiteAbout:'http://196.190.43.162:89/about',
      facebook:'http://www.facebook.com/tigrai.tv1',
      x:'http://www.x.com/Tigrai_TV',
      youtube:'http://www.youtube.com/',
      tiktok:'http://www.tiktok.com',

      dev:'development'

  };
  
  export default env[process.env.NODE_ENV || 'development'];
  export { env}