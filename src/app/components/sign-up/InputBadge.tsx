import { Flex } from 'antd';

import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';

const InputBadge: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex
      style={{
        backgroundColor: colors.gray[500],
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 6px',
        marginLeft: 8,
        color: colors.white,
        fontSize: 11,
        fontWeight: 600
      }}
    >
      {t('common:any')}
    </Flex>
  );
};

export default InputBadge;
