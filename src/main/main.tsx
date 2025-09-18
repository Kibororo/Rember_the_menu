import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { makeCreateHomePageFactory } from './factories/pages/MakeCreateHomePageFactory';
import { MakeCreateQuizPageFactory } from './factories/pages/MakeCreateQuizPageFactory';

export const Router = () => {
      return (
          <Routes>
            <Route path="/" Component={makeCreateHomePageFactory}/>
            <Route path="/quiz" Component={MakeCreateQuizPageFactory}/>
          </Routes>
      );
  };

  const container :HTMLElement|null = document.getElementById('root');
  if (!container) {
    throw new Error('Container element not found');
  }
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Router />
      </HashRouter>
    </React.StrictMode>
  );
