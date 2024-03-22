'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { removeLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage';
import { Key } from '@/utils/sessionStorage';

const Page: React.FC = () => {
  const [state, setState] = useState<string>();

  const authURL = useMemo(() => {
    const authorizationURL = 'https://access.line.me/oauth2/v2.1/authorize';
    const redirectURI = `${process.env.NEXT_PUBLIC_LINE_LOGIN_CHANNEL_CALLBACK_URL}`;

    return (
      authorizationURL +
      `?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINE_LOGIN_CHANNEL_ID}` +
      `&scope=${encodeURIComponent('profile openid')}` +
      `&redirect_uri=${encodeURIComponent(redirectURI)}` +
      `&state=${state}`
    );
  }, [state]);

  const generateToken = useCallback((len: number): string => {
    const token: string[] = [];
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const arr = new Uint8Array(len);

    window.crypto.getRandomValues(arr);

    for (let i = 0; i < len; i++) {
      token.push(charset[arr[i] % charset.length]);
    }

    return token.join('');
  }, []);

  useEffect(() => {
    const state = generateToken(32);
    removeLocalStorageItem(Key.lineLoginTempToken);
    setLocalStorageItem<string>(Key.lineLoginTempToken, state);
    setState(state);
  }, [generateToken]);

  if (!state) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
  }

  return <a href={authURL}>LINE LOGIN</a>;
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
