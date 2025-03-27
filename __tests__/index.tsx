import { QueryClient, QueryClientProvider } from "react-query";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: 0,
    },
  },
});

function AllProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      {children}
    </QueryClientProvider>
  );
}

export const renderWithProvider = (
  ui: React.ReactNode,
  options: RenderOptions = {}
) => {
  return render(ui, { wrapper: AllProvider, ...options });
};
