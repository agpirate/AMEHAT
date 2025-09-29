// mocks/data/videos.ts
export const mockVideos = [
  {
    id: '1',
    title: 'Tigray Cultural Heritage',
    duration: '12:34',
    views: 125000,
    thumbnail: require('@assets/thumbnails/culture.jpg'),
    category: 'documentary',
  },
  // ... 5-10 varied items
] as const;

// mocks/data/users.ts 
export const mockUsers = {
  admin: {
    id: 'user-1',
    name: 'Admin User',
    email: 'admin@tigrai.tv',
    roles: ['admin'],
  },
  viewer: {
    id: 'user-2',
    name: 'Regular Viewer',
    email: 'viewer@example.com',
    roles: ['viewer'],
  },
};