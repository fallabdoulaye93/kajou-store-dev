import React from 'react';
import { Image} from 'antd';
import * as Style from './Thematique.styles';
import { useTranslation } from 'react-i18next';

interface ThematiqueProps {

data ?: any
}

    export const Thematique: React.FC<ThematiqueProps> = ({data }) => {
      const { t } = useTranslation();
  return (
     
      <Style.ThematiqueWrapper>      
      
       <Image src={data.image} alt={data.titre} preview={false} width={'100%'}/>
       <Style.DetailsWrapper>
       <Style.Titre>{data.titre} </Style.Titre>
       <Style.Contenus>{data.contenus} </Style.Contenus>
       </Style.DetailsWrapper>         
    </Style.ThematiqueWrapper>

  );
};
