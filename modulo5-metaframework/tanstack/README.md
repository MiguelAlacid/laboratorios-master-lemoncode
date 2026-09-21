# Enrutado basado en ficheros

Las rutas viven en `src/routes` y TanStack Router genera automáticamente
`routeTree.gen.ts` a partir de esa estructura. `src/router.ts` crea el
router (`createRouter`) a partir de ese árbol.

- `routes/__root.tsx`: ruta raíz con `createRootRoute` y `shellComponent`.
- `routes/houses/route.tsx`: layout de la sección `/houses`
- `routes/houses/index.tsx` y `routes/houses/$id.tsx`: listado y detalle de
  casas.

# Carga de datos: loaders

Cada ruta define su propio `loader`, separado del componente

El componente consume esos datos con `Route.useLoaderData()`. El `<title>`
y los `<meta>` de cada página se definen con `head()`

# Server Functions

El fetch a la API no se hace desde el cliente, sino con `createServerFn()`
de `@tanstack/react-start`. Es código que solo se ejecuta en el servidor aunque se invoque como una
función normal desde el `loader`. La del detalle usa `.validator()` para
tipar y validar el `id` recibido.
