// mocks/factories/video-factory.ts
import { faker } from '@faker-js/faker';
import { mockVideos } from '../data/videos';

type VideoFactoryOptions = {
  isFeatured?: boolean;
  category?: string;
};

export const createVideoMock = (overrides?: VideoFactoryOptions) => ({
  ...mockVideos[0], // Base template
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  views: faker.number.int({ min: 1000, max: 1000000 }),
  ...overrides,
});

// Usage in tests:
const testVideo = createVideoMock({ category: 'entertainment' });