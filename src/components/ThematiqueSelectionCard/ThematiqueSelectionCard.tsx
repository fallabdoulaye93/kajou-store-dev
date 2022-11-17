import React from 'react';
import { CardProps } from '@app/components/common/Card/Card';
import * as S from './ThematiqueSelectionCard.styles';

interface NFTCardProps extends CardProps {
  isSider?: boolean;
}

export const ThematiqueSelectionCard: React.FC<NFTCardProps> = ({ isSider = false, ...props }) => {
  return <S.Card $isSider={isSider} autoHeight={false} padding={[24, 20]} {...props} />;
};
