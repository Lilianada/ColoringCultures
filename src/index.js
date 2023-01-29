import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = lazy(() => import('./App'))
root.render(
  <React.StrictMode>
    <Suspense style={{background: "url(../src/assets/Vector 1.svg)"}}>
          <App />
        </Suspense>
  </React.StrictMode>
);


