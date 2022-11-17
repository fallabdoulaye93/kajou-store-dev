import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import * as Style from './MostViewItem.styles';
import {Image} from "antd";

interface MostViewItemProps {
  MostViewItemData:any
}

export const MostViewItem: React.FC<MostViewItemProps> = ({MostViewItemData}) => {

  const { t } = useTranslation();

  useEffect(() => {
  
  }, []);


  return (
      <Style.MostViewItemWrapper>

          <Style.RankItem>{MostViewItemData.rank?MostViewItemData.rank:1}</Style.RankItem>
              <Style.Image>
                  <Image src={MostViewItemData.image} preview={false} width={'100%'} height={'100%'} style={{borderRadius:10}}/>
              </Style.Image>
            
          <Style.MostItemView>
              <Style.Title>{MostViewItemData.title}</Style.Title>
              <Style.Subtitle>{MostViewItemData.subtitle}</Style.Subtitle>   
              <Style.Like>{t(MostViewItemData.like + ' j\'aime')} </Style.Like>
          </Style.MostItemView>

      </Style.MostViewItemWrapper>
  );
};
