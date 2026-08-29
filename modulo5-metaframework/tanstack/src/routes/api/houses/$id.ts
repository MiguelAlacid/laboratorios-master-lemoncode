import { houses } from '#db';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/houses/$id')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        return Response.json(houses.find((h) => h.id === params.id));
      },
    },
  },
});
