import React from 'react';
import { Col, Image, Row, Card, Button } from 'antd';
import * as Style from './PageSousCategorie.styles';
import { useTranslation } from 'react-i18next';

import {useNavigate} from "react-router-dom";
import arrowReturn from '@app/assets/images/arrowReturn.png'
import search from '@app/assets/images/search.png'
import blackLine from '@app/assets/images/blackLine.png'
import arrow_icon from '@app/assets/images/arrow_icon.png'
import { SeedJson } from '@app/api/seed.api';
import {thematiqueJson} from '@app/api/thematique.api'
import { ItemSeed } from '../ItemSeed/ItemSeed';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

interface PageSousCategorieProps {
  data?: any;
}

export const PageSousCategorie: React.FC<PageSousCategorieProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Style.PageSousCategorieWrapper >
     
        <HeaderComponent/>

        <Style.TitleDossier>
          Education > Collège & Lycée > Terminale > Terminale S
        </Style.TitleDossier>
        <Style.Title>{('mathématiques terminale S')}</Style.Title>
        <Style.Separator>
            <Image src={blackLine} preview={false} width={'15%'}/>
        </Style.Separator>

        <Style.TitleCategorie>
            Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.
        </Style.TitleCategorie>

        <Style.SeedHeader>
              <Style.SeedTitle>{t('Les étapes de la grossesse')}</Style.SeedTitle>
              <Style.SeedIcon><Image src={arrow_icon} width={'60%'}/> </Style.SeedIcon>
        </Style.SeedHeader>

        <Style.SliderItem>       
         
         {
                      thematiqueJson?.map((item: any, key: any) => (
                       <div>
                         <ItemSeed data={item} key={key} />
                       </div>
                     ))
         }
          </Style.SliderItem>

          <Style.TitleCategorie>
              Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.
          </Style.TitleCategorie>

          <Style.ButtonSeeMore>
          > Voir toute la playlist
          </Style.ButtonSeeMore>

          <Style.SeedHeader>
              <Style.SeedTitle>{t('Les étapes de la grossesse')}</Style.SeedTitle>
              <Style.SeedIcon><Image src={arrow_icon} width={'60%'}/> </Style.SeedIcon>
        </Style.SeedHeader>

        <Style.SliderItem>       
         
         {
                      thematiqueJson?.map((item: any, key: any) => (
                       <div>
                         <ItemSeed data={item} key={key} />
                       </div>
                     ))
         }
          </Style.SliderItem>

          <Style.TitleCategorie>
              Donec purus nibh, ornare auctor blandit at, semper at leo. Quisque volutpat blandit sapien, vitae eleifend mi blandit quis. Donec quis tincidunt lacus. Fusce eget risus in lorem semper pellentesque. Mauris in volutpat risus. Quisque imperdiet scelerisque enim vitae condimentum. Aliquam erat volutpat. Proin luctus convallis dolor, vel feugiat tellus consequat in. Aliquam et vehicula urna.
          </Style.TitleCategorie>

          <Style.ButtonSeeMore>
          > Voir toute la playlist
          </Style.ButtonSeeMore>

    </Style.PageSousCategorieWrapper>
  );
};
