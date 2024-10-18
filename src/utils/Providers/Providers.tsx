"use client";

import { ChakraProvider } from "@chakra-ui/react";
import ReactQueryProvider from "./ReactQueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ReactQueryProvider>
  );
}
