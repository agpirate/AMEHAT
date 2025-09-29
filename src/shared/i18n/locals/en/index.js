

//   export default en={
//     categories: require(`./categories.json`),
//     news:       require(`./news.json`),
//     common:  require(`./common.json`),
//   }

  async function loadLocaleResources() {
    return {
      common: require(`./common.json`),
      categories: require(`./categories.json`),
      news:       require(`./news.json`),
    };
  }

  export default loadLocaleResources;