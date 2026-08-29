import {
  createRootRoute,
  HeadContent,
  Link,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import normalizeCss from 'normalize.css?url';
import * as React from 'react';
import materialIcons from './material-icons.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alquiler de casas' },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/home-logo.png' },
      { rel: 'stylesheet', href: normalizeCss },
      { rel: 'stylesheet', href: materialIcons },
    ],
  }),
  notFoundComponent: NotFoundComponent,
  shellComponent: RootComponent,
});

function NotFoundComponent() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/houses">Volver al listado de casas</Link>
    </div>
  );
}

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main>{children}</main>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
