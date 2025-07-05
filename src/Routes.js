import { Route } from 'react-router-dom';

const routes = (
  <>
    <Route path="/" />
    <Route path="/generalidades/:typeGen" />
    <Route path="/componentes" />
    <Route path="/componentes/aventura" />
    <Route path="/componentes/esports" />
    <Route path="/componentes/nutricion" />
    <Route path="/componentes/nutricion/:id" />
    <Route path="/componentes/psicologia" />
    <Route path="/componentes/entrenamiento" />
    <Route path="/componentes/entrenamiento/:muscle" />
    <Route path="/componentes/entrenamiento/:muscle/:id" />
    <Route path="/componentes/running" />
    <Route path="/componentes/running/:id" />
    <Route path="/opiniones" />
    <Route path="/premium" />
    <Route path="/generalidades/:typeGen/:key" />
  </>
);

export default routes;
