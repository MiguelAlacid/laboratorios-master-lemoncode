import {
  createRootRoute,
  HeadContent,
  Link,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ThemeProvider } from '#core/theme.context';
import normalizeCss from 'normalize.css?url';
import * as React from 'react';
import globalCss from './global.css?url';
import materialIcons from './material-icons.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alquiler de casas - Inicio' },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/home-logo.png' },
      { rel: 'stylesheet', href: normalizeCss },
      { rel: 'stylesheet', href: materialIcons },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
      },
      { rel: 'stylesheet', href: globalCss },
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
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
