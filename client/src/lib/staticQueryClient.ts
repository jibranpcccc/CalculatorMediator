import { QueryClient } from "@tanstack/react-query";

// Static query client for frontend-only deployment
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// Mock API request function for static deployment
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Return mock response for static deployment
  const mockResponse = new Response(JSON.stringify([]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  return mockResponse;
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => (context: { queryKey: readonly unknown[] }) => Promise<T> = <T>(options: {
  on401: UnauthorizedBehavior;
}) => {
  return async () => {
    // Return empty array for static deployment
    return [] as T;
  };
};