"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function ClientLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen flex justify-center items-center">
        {children}
      </div>

      <ToastContainer />
    </QueryClientProvider>
  );
}

export default ClientLayout;
