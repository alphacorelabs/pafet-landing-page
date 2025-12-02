import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.tsx";
import './index.css'
import App from './App.tsx'
//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";

// Create an instance of the Mixpanel object, your token is already added to this snippet
mixpanel.init('cef708fbefb988f88474ff1b2105a567', {
  autocapture: true,
  record_sessions_percent: 100,
})


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
      </QueryClientProvider>
  </StrictMode>,
)
