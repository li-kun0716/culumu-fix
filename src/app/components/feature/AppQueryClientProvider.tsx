'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'antd';

// https://tanstack.com/query/latest
const AppQueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { message } = App.useApp();
  //
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: { onError: (error) => message.error(error.message) }
    }
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AppQueryClientProvider;
