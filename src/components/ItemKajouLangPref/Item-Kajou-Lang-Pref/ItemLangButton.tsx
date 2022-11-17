import React, {useState} from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { KajouLangsprefItem } from '@app/api/userPreference.api';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './ItemLangButton.styles';
import {Col} from "antd";
import {Button} from "@app/components/common/buttons/Button/Button";
import {useTranslation} from "react-i18next";

interface ItemKajouLangsprefProps {
  itemKajouLangspref: KajouLangsprefItem;
}

export const ItemLangButton: React.FC<ItemKajouLangsprefProps> = ({ itemKajouLangspref }) => {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };

    return (
      <Button onClick={handleClick} style={{border: 0, backgroundColor: isActive ? '#FC6854': '#F3F3F3', color: isActive ? '#FFFFFF': '#000000', fontWeight: 'bold', fontSize: '14px', marginRight: '18px', height: '38px'}}>
          {itemKajouLangspref.language}
      </Button>
    );

};

