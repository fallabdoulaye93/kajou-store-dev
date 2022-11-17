import React from 'react';
import * as S from './Tag.styles';

export interface ITag {
  id: string;
  name: string;
  color: string;
}

interface TagProps {
  name: string;
  color?: string;
  removeTag?: () => void;
}

export const Tag: React.FC<TagProps> = ({ name,  color, removeTag, ...otherProps }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      {name}
    </S.TagWrapper>
  );
};
