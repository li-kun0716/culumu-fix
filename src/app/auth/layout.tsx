'use client';

import React from 'react';

import AppQueryClientProvider from '@/app/components/feature/AppQueryClientProvider';

export default function layout({ children }: { children: React.ReactNode }) {
  return <AppQueryClientProvider>{children}</AppQueryClientProvider>;
}
