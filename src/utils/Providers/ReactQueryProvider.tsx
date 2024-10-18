"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

interface propTypes {
  children: React.ReactNode;
}

const ReactQueryProvider = ({ children }: propTypes) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
