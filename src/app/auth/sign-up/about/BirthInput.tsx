import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Select, Typography } from 'antd';
import { getDaysInMonth } from 'date-fns';

import { monthOptions, yearOptions } from '@/utils/common';
import { useTranslation } from '@/i18n/client';

export const BirthInput: React.FC<{ onChange: (date: Date) => void }> = ({ onChange }) => {
  const { t } = useTranslation('auth-page');
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [dayOptions, setDayOptions] = useState<{ label: string; value: string }[]>([]);
  const [selectDayDisabled, setSelectDayDisabled] = useState(true);

  const handleYearSelected = useCallback(
    (val: number) => {
      month && day && onChange(new Date(val, month, day));
      setYear(val);
    },
    [month, day, onChange]
  );

  const handleMonthSelected = useCallback(
    (val: number) => {
      year && day && onChange(new Date(year, val, day));
      setMonth(val);
    },
    [year, day, onChange]
  );

  const handleDaySelected = useCallback(
    (val: number) => {
      year && month && onChange(new Date(year, month, val));
      setDay(val);
    },
    [year, month, onChange]
  );

  useEffect(() => {
    if (year && month) {
      setSelectDayDisabled(false);

      const optionsLength = getDaysInMonth(new Date(year, month));
      const options = Array.from({ length: optionsLength }, (_, index) => ({
        label: index + 1 + '',
        value: index + 1 + ''
      }));

      setDayOptions(options);
    } else {
      setSelectDayDisabled(true);
    }
  }, [year, month]);

  return (
    <Flex gap={8} justify="space-between">
      <Flex align="center" gap={4}>
        <Select placeholder="2000" style={{ width: 91, height: 48 }} onSelect={handleYearSelected}>
          {yearOptions().map((year) => (
            <Select.Option value={year.label} key={year.value}>
              {year.value}
            </Select.Option>
          ))}
        </Select>
        <Typography.Text>{t('common:year')}</Typography.Text>
      </Flex>
      <Flex align="center" gap={4}>
        <Select placeholder="1" style={{ width: 91, height: 48 }} onSelect={handleMonthSelected}>
          {monthOptions().map((month) => (
            <Select.Option value={month.label} key={month.value}>
              {month.value}
            </Select.Option>
          ))}
        </Select>
        <Typography.Text>{t('common:month')}</Typography.Text>
      </Flex>
      <Flex align="center" gap={4}>
        <Select
          disabled={selectDayDisabled}
          placeholder="1"
          style={{ width: 91, height: 48 }}
          onSelect={handleDaySelected}
        >
          {dayOptions.map((day) => (
            <Select.Option value={day.label} key={day.value}>
              {day.value}
            </Select.Option>
          ))}
        </Select>
        <Typography.Text>{t('common:day')}</Typography.Text>
      </Flex>
    </Flex>
  );
};
