'use client';

import React from 'react';

import AppQueryClientProvider from '@/app/components/feature/AppQueryClientProvider';
import AuthGuard from '@/guard/AuthGuard';
import { UserContextProvider } from '@/app/context/UserContext';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AppQueryClientProvider>
      <UserContextProvider>
        <AuthGuard>{children}</AuthGuard>
      </UserContextProvider>
    </AppQueryClientProvider>
  );
}
