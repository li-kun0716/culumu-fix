import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Select, Typography } from 'antd';
import { getDate, getDaysInMonth, getMonth, getYear } from 'date-fns';

import { monthOptions, yearOptions } from '@/utils/common';
import { useTranslation } from '@/i18n/client';
import { useUserContext } from '@/app/hooks/useUserContext';

export const BirthInput: React.FC<{ onChange: (date: Date) => void }> = ({ onChange }) => {
  const { t } = useTranslation('auth-page');
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [dayOptions, setDayOptions] = useState<{ label: string; value: string }[]>([]);
  const [selectDayDisabled, setSelectDayDisabled] = useState(true);
  const { state } = useUserContext();

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

  useEffect(() => {
    const year = getYear(new Date(state.profile.birth ?? ''));
    const month = getMonth(new Date(state.profile.birth ?? ''));
    const day = getDate(new Date(state.profile.birth ?? ''));

    if (year) setYear(Number(year));
    if (month) setMonth(Number(month));
    if (day) setDay(Number(day));
  }, [state.profile.birth]);

  const DateSelect: React.FC<{
    options: { label: string; value: string }[];
    placeholder: string;
    defaultValue?: number;
    onSelect: (val: number) => void;
    disabled?: boolean;
  }> = ({ options, placeholder, defaultValue, onSelect, disabled }) => (
    <Select
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{ width: 91, height: 48 }}
      onSelect={onSelect}
      disabled={disabled}
    >
      {options.map((item) => (
        <Select.Option value={item.label} key={item.value}>
          {item.value}
        </Select.Option>
      ))}
    </Select>
  );

  return (
    <Flex gap={8} justify="space-between">
      <Flex align="center" gap={4}>
        <DateSelect options={yearOptions()} placeholder="2000" defaultValue={year} onSelect={handleYearSelected} />
        <Typography.Text>{t('common:year')}</Typography.Text>
      </Flex>
      <Flex align="center" gap={4}>
        <DateSelect options={monthOptions()} placeholder="1" defaultValue={month} onSelect={handleMonthSelected} />
        <Typography.Text>{t('common:month')}</Typography.Text>
      </Flex>
      <Flex align="center" gap={4}>
        <DateSelect
          options={dayOptions}
          placeholder="1"
          defaultValue={day}
          onSelect={handleDaySelected}
          disabled={selectDayDisabled}
        />
        <Typography.Text>{t('common:day')}</Typography.Text>
      </Flex>
    </Flex>
  );
};
