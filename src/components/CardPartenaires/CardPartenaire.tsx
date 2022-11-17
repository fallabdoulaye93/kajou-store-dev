import React from 'react';
import * as S from './CardPartenaire.styles';

export interface ICardPartenaire {
  id: string;
  name: string;
  logo: string;
}

interface CardPartenaireProps {
  id: string;
  name?: string;
  logo?: string;
}

export const CardPartenaire: React.FC<CardPartenaireProps> = ({ id,  name, logo, ...otherProps }) => {
  const style = {
    color: 'black',
    fontSize: '9px',
    fontStyle: 'italic',
  };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      #{name}
    </S.TagWrapper>
  );
};
