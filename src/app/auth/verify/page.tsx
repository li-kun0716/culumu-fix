'use client';

import React, { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { message } from 'antd';

import { getLocalStorageItem, Key, removeLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage';
import { login } from '@/api/login';

import Loading from './loading';

const Verify: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  // https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app
  useEffect(() => {
    const state = searchParams.get('state');
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    if (state && state !== getLocalStorageItem<string>(Key.lineLoginTempToken)) {
      messageApi.open({ type: 'error', content: 'state: ' + state });
      removeLocalStorageItem(Key.lineLoginTempToken);
      router.replace('/auth/login');
      return;
    }

    if (code) {
      login({ code, state: state ?? '' })
        .then((r) => {
          setLocalStorageItem(Key.authorization, r.data.credential);
          removeLocalStorageItem(Key.lineLoginTempToken);
          messageApi.open({ type: 'success', content: 'logined' });
          router.replace('/');
        })
        .catch((reason) => {
          console.log(reason);
          removeLocalStorageItem(Key.lineLoginTempToken);
          messageApi.open({ type: 'error', content: 'login error' });
        });
    }

    if (error) {
      messageApi.open({ type: 'error', content: errorDescription });
    }
  }, [messageApi, router, searchParams]);

  return <>{contextHolder}</>;
};

const Page: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Verify />
    </Suspense>
  );
};

export default Page;
