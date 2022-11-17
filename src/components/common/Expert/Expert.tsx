import React from 'react';
import { Image} from 'antd';
import * as Style from './Expert.styles';
import expert from '@app/assets/images/expert.png'
import arrowReturn from '@app/assets/images/arrowReturn.png'
import { InfoCircleFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Data= 
{
 
  "contenus": "Les contenus Kajou sont sélectionnés pour vous avec amour par des experts reconnus dans leur discipline."
}

    export const Expert: React.FC = () => {
        const { t } = useTranslation();
  return (
     
       <Style.ExpertWrapper>  
       
            <Image width='100%' src={expert} preview={false}/> 
            <Style.ImageAbsolute>
              <Image width='10%' src={arrowReturn} preview={false}/> 
            </Style.ImageAbsolute> 
            <Style.DescriptionExpert>{Data.contenus}</Style.DescriptionExpert>
          <Style.Expert>{t('En savoir +')}</Style.Expert>
   </Style.ExpertWrapper>

  );
};
