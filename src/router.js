import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './pages/404';
import Header from './components/header';
import Footer from './components/footer';

const routes = [
  {
    path: '/album',
    Component: lazy(() => import('./pages/album')),
    extact: true,
  },
  {
    path: '/album/create',
    Component: lazy(() => import('./pages/album/create-album')),
    extact: true,
  },
  {
    path: '/album/update',
    Component: lazy(() => import('./pages/album/update-album')),
    extact: true,
  },
];

function router(props) {
  return (
    <div className="font-mono">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/album'} />} />
          {routes.map(({ path, extact, Component }, index) => (
            <Route
              key={index}
              path={path}
              extact={extact}
              element={
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default router;
