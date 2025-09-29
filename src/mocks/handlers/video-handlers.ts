// mocks/handlers/video-handlers.ts
import { rest } from 'msw';
import { mockVideos } from '../data/videos';

export const videoHandlers = [
  rest.get('/api/videos', (req, res, ctx) => {
    return res(
      ctx.delay(150), // Simulate network delay
      ctx.json({
        data: mockVideos,
      })
    );
  }),
];