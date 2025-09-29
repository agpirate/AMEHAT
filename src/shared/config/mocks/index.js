const featuredChannels = [
    { id: 1, name: 'EBC', type: 'TV', language: 'Amharic', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 2, name: 'Tigrai TV', type: 'TV', language: 'Tigrinya', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 3, name: 'ESAT', type: 'TV', language: 'English', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 4, name: 'Dimtsi Radio', type: 'Radio', language: 'Tigrinya', logo: require('../../../assets/images/tmma_logo.png') },
  ];

  const breakingNews = [
    { id: 1, title: 'Breaking: Major political development in the region', source: 'EBC', time: '2h ago' },
    { id: 2, title: 'Sports: National team wins championship', source: 'ESAT', time: '4h ago' },
    { id: 3, title: 'Entertainment: Annual cultural festival begins', source: 'Tigrai TV', time: '1d ago' },
  ];

  const recommendedPrograms = [
    { id: 1, title: 'Morning News Roundup', channel: 'EBC', time: '08:00 AM', language: 'Amharic' },
    { id: 2, title: 'Sports Highlights', channel: 'ESAT', time: '07:30 PM', language: 'English' },
    { id: 3, title: 'Cultural Program', channel: 'Tigrai TV', time: '09:00 PM', language: 'Tigrinya' },
  ];

  export { featuredChannels, breakingNews, recommendedPrograms };   