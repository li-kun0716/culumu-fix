import React from 'react';
import { Flex } from 'antd';

import { isClient } from '@/utils/isClient';
import { fallbackLng } from '@/i18n/settings';

import { Client } from './Client';
import { Server } from './Server';

export const LanguageSwitcher: React.FC<{ lng?: string }> = ({ lng = fallbackLng }) => (
  <div>
    {isClient() ? (
      <Flex>
        <Client lng={lng} />
      </Flex>
    ) : (
      <Flex>
        <Server lng={lng} />
      </Flex>
    )}
  </div>
);
