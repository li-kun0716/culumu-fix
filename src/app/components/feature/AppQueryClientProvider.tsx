import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { message } from 'antd';

// https://tanstack.com/query/latest
const AppQueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: { onError: (error) => messageApi.open({ type: 'error', content: error.message }) }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      {contextHolder}
      {children}
    </QueryClientProvider>
  );
};

export default AppQueryClientProvider;
