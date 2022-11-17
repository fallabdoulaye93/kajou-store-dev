import React, {} from 'react';

import * as Style from './ItemCard.styles';
import image from '@app/assets/images/image.png';
import {Image} from "antd";

interface ItemCardProps {
    data?: any;
  }

export const ItemCard: React.FC<ItemCardProps> = ({data}) => {

  return (
    <Style.ImgWrapper>
      <Image src={data.image} preview={false} width={'100%'}/>
{/* 
      <Style.ImageAbsolute>

        <Style.SliderItem>
          {themeJson?.map((item: any, key: any) => (
            <div>
              <ItemThematique data={item} key={key} />
            </div>
          ))}
        </Style.SliderItem>

        <Style.Seedtitle>
          <Style.SeedTitleText>{themeJson[0].titre} </Style.SeedTitleText>
        
        </Style.Seedtitle>
      </Style.ImageAbsolute> */}
    </Style.ImgWrapper>

  );
};
