import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
};

// el omit sirve para omitir la propiedad detail del switchRoutes, ya que esta se va a generar dinámicamente con el id
interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string) => generatePath(switchRoutes.detail, { id }),
};