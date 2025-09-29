const modelItems =     [
  {
      id: '1',
      title: 'Global Summit Addresses Climate Change Crisis',
      description: 'World leaders gather to discuss urgent measures against rising global temperatures',
      imageUrl: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb',
      category: 'Politics',
      date: '2 hours ago',
      isBreaking: true,
      content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
      ], // Full article content
      author: 'Jane Smith',
      source: 'World News Network',
      videoUrl: null
    },
      {
      id: '2',
      title: 'Stock Markets Reach All-Time High',
      description: 'Major indices surge as economic recovery exceeds expectations',
      imageUrl: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb',
      category: 'Sport',
      date: '2 hours ago',
      isBreaking: true,
      content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...',
      ], // Full article content
      author: 'Jane Smith',
      source: 'World News Network',
      videoUrl: null
    },
      {
      id: '3',
      title: 'New Tech Gadgets Unveiled at CES 2023',
      description: 'Innovative products that will change how we interact with technology',
      imageUrl: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb',
      category: 'Politics',
      date: '2 hours ago',
      isBreaking: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod...', // Full article content
      author: 'Jane Smith',
      source: 'World News Network',
      videoUrl: null
    }
  ]

const mockModelData = {
  featuredNews:modelItems,
  breakingNews: [
    {
      id: '2',
      title: 'Stock Markets Reach All-Time High',
      description: 'Major indices surge as economic recovery exceeds expectations',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      date: '45 minutes ago',
      source: 'Financial Times',
      isVideo: false
    }
  ],
  trendingNews: [
    {
      id: '3',
      title: 'New Tech Gadgets Unveiled at CES 2023',
      description: 'Innovative products that will change how we interact with technology',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      date: '5 hours ago',
      source: 'Tech Today',
      views: '1.2M',
      isVideo: false
    }
  ],
  videoNews: [
    {
      id: '4',
      title: 'Exclusive Interview with Award-Winning Director',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      duration: '12:45',
      views: '845K',
      date: '1 day ago',
      source: 'Entertainment Weekly',
      videoUrl: 'https://example.com/videos/12345'
    }
  ],
  categories: [
    {
      id: 'politics',
      name: 'Politics',
      news: [
        {
          id: '5',
          title: 'Senate Passes Historic Infrastructure Bill',
          description: 'Bipartisan legislation aims to rebuild nation\'s roads and bridges',
          imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
          date: '3 hours ago',
          source: 'National Politics'
        }
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      news: [
        {
          id: '6',
          title: 'Apple Announces Revolutionary New AR Glasses',
          description: 'Wearable device blends digital content with the real world',
          imageUrl: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e',
          date: '8 hours ago',
          source: 'Tech Insider'
        }
      ]
    }
  ],
  regularNews: [
    {
      id: '7',
      title: 'Scientists Discover New Species in Amazon Rainforest',
      description: 'Expedition uncovers previously unknown biodiversity in remote region',
      imageUrl: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda',
      date: '1 day ago',
      source: 'Nature Journal',
      content: 'Detailed article content would go here...',
      author: 'Dr. Alan Grant',
      isVideo: false
    },
    {
      id: '8',
      title: 'Olympic Athlete Sets New World Record',
      description: 'Sprinter breaks 100m dash record that stood for 15 years',
      imageUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781',
      date: '6 hours ago',
      source: 'Sports Daily',
      isVideo: true,
      videoUrl: 'https://example.com/videos/67890',
      thumbnailUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781',
      duration: '2:30',
      views: '3.4M'
    }
  ],
  savedArticles: [
    {
      id: '9',
      title: 'The Future of Remote Work in 2023',
      description: 'How companies are adapting to permanent hybrid work models',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      date: '2 days ago',
      source: 'Business Week',
      savedDate: '2023-05-15T14:30:00Z'
    }
  ],

  category:{
    'business':modelItems,
    'sport':modelItems
  }
};

export default mockModelData;