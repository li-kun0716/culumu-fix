'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { Key, getLocalStorageItem } from '@/utils/localStorage';

type AuthGuardProps = { children: ReactNode };

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const authorization = getLocalStorageItem(Key.authorization);
  const [view, setView] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (!authorization) {
      setView(null);
      router.replace('/auth/login');
      return;
    }

    setView(children);
  }, [authorization, children, router]);

  return <>{view}</>;
}
