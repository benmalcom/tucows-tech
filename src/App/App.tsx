import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main as MainLayout } from 'components/layouts';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ErrorHandler from './ErrorHandler';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default App;
