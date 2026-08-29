import { houses } from '#db';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/houses/')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json(houses);
      },
    },
  },
});
