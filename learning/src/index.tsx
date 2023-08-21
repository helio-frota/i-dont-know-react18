import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AForm from './components/aForm';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <h1>learning</h1>
      <AForm />
    </>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
