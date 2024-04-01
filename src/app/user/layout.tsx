'use client';

import React from 'react';

import AppQueryClientProvider from '@/app/components/feature/AppQueryClientProvider';
import AuthGuard from '@/guard/AuthGuard';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AppQueryClientProvider>
      <AuthGuard>{children}</AuthGuard>
    </AppQueryClientProvider>
  );
}
