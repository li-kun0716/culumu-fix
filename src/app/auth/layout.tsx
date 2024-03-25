'use client';

import React from 'react';

import AppQueryClientProvider from '@/app/components/feature/AppQueryClientProvider';

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <AppQueryClientProvider>{children}</AppQueryClientProvider>
);

export default Layout;
