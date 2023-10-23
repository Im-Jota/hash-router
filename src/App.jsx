import * as React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./page/Home";
import About from "./routes/About";
import Theme from "./theme/Theme";
import { useContext } from "react";
import TContext from "./context/theme/TContext";
import Projects from "./routes/Projects";
import Main from "./routes/Main";
import Error404 from './page/Error404'

function App() {

  const {theme} = useContext(TContext);

  const routes = createHashRouter ([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/projects',
          element: <Projects />
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />
    }
  ]);
  return (
    <ThemeProvider theme={Theme[theme]}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
