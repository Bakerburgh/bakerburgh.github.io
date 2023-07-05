import React from 'react';
import RouteWrapper from '../common/components/RouteWrapper/RouteWrapper';
import { RouteObject } from 'react-router-dom';
import DominoCounter from '../routes/DominoCounter/DominoCounter';

let routes: RouteObject[] = [
  {
    path: "/",
    element: <RouteWrapper><div>Hello, World!</div></RouteWrapper>,
    errorElement: <RouteWrapper><div>Not Found</div></RouteWrapper>
  },
  {
    path: "/dominoCounter",
    element: <RouteWrapper><DominoCounter/></RouteWrapper>
  },
  {
    path: "/*",
    element: <RouteWrapper><div>Not Found!</div></RouteWrapper>
  }
];

export default routes;