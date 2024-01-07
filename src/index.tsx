import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';
import reportAccessibility from './reportAccessibility';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';

worker.start().then(() => {
  const container = document.getElementById('root');
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  );
});

reportAccessibility(React);
reportWebVitals();
