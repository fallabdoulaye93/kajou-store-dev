import React, {useState} from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { KajouLangsprefItem } from '@app/api/userPreference.api';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './ItemLangButton.styles';
import {Col} from "antd";
import {Button} from "@app/components/common/buttons/Button/Button";
import {useTranslation} from "react-i18next";
import { Select, Option } from '@app/components/common/selects/Select/Select';

interface ItemKajouLangsprefProps {
  itemKajouLangspref: KajouLangsprefItem;
}

export const SelectOptionButton: React.FC<ItemKajouLangsprefProps> = ({ itemKajouLangspref }) => {
    const { t } = useTranslation();
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = () => {
        setIsSelected(current => !current);
    };

    return (
      <Option onClick={handleClick} value={itemKajouLangspref.id}>
          {itemKajouLangspref.language}
      </Option>
    );
};
