# Rendering elegido para cada página

`/` **SSG** (estático). No consume datos ni APIs dinámicas. Se prerenderiza en build y se sirve como HTML estático.

`/houses` **ISR** (`revalidate = 60`). El catálogo es igual para todos los usuarios y cambia con poca frecuencia. Se sirve estático y Next lo regenera en segundo plano como máximo una vez cada minuto, sin necesidad de rebuild.

`/houses/[houseId]` **SSG + `generateStaticParams`** con **ISR** (`revalidate = 60`). Las casas se conocen en build (`generateStaticParams` las lista desde la API). Se genera una página estática por casa. `dynamicParams = true` permite que una casa nueva creada después del build se genere **bajo demanda (SSR en la primera visita)** y se cachee después. Si el `id` no existe → `notFound()` (404).

### ¿Cuándo usaríamos SSR puro?

Si se mostraran datos dependientes de la petición o que deban estar
siempre al día cambiaríamos `/houses/[houseId]` a SSR con
`export const dynamic = 'force-dynamic'` o `fetch(..., { cache: 'no-store' })`.
