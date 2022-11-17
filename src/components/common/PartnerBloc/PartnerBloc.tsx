import React from 'react';
import * as S from './PartnerBloc.styles';
import {Image} from "antd";

export interface ITag {
  id: string;
  name: string;
  color: string;
}

interface TagProps {
  name: string;
  logo?: string;
}

export const PartnerBloc: React.FC<TagProps> = ({ name,  logo, ...otherProps }) => {
  const style = {

  };
  return (
      <S.Image src={logo} alt={name} preview={false} />
  );
};
