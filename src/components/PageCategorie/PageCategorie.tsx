import React from 'react';
import { Image } from 'antd';
import * as Style from './PageCategorie.styles';
import { useTranslation } from 'react-i18next';

import {useNavigate} from "react-router-dom";
import blackLine from '@app/assets/images/blackLine.png'

import { categorieJson } from '@app/api/categorie.api';
import { Thematique } from '../Thematique/Thematique';
import { pageCategorieJson } from '@app/api/page_categorie.api';
import { ItemPlaylist } from '../common/ItemPlaylistDossierThematique/ItemPlaylist';
import { ItemCard } from '../common/ItemCard/ItemCard';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

interface PageCategorieProps {
  data?: any;
}

export const PageCategorie: React.FC<PageCategorieProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
   // navigate('/detail-seed', { state: { data } })
  };

  return (
    <Style.PageCategorieWrapper>

        <HeaderComponent/>

        <Style.PageCategorieContent>

            <Style.Title>{'ÉDUCATION'}</Style.Title>

            <Style.Separator>
                <Image src={blackLine} preview={false} width={'15%'} />
            </Style.Separator>

            <Style.TitleCategorie>{'EDUCATION PRIMAIRE'}</Style.TitleCategorie>

            <Style.SliderItem>
                {categorieJson?.map((item: any, key: any) => (
                    <div>
                    <Thematique data={item} key={key} />
                    </div>
                ))}
            </Style.SliderItem>

            <Style.TitleCategorie>{'COLLÈGE & LYCÉE'}</Style.TitleCategorie>

            <Style.SliderItem>
              {categorieJson?.map((item: any, key: any) => (
                <div>
                  <Thematique data={item} key={key} />
                </div>
              ))}
            </Style.SliderItem>

            <Style.Selection>

            <Style.SelectionContent>
              
                <Style.TitleSelection>Notre sélection</Style.TitleSelection>
                <Style.SliderWrapper>
                    {pageCategorieJson?.map((item: any, key: any) => (
                      <div>
                        <ItemCard data={item} key={key} />
                      </div>
                    ))}
                </Style.SliderWrapper>

            </Style.SelectionContent>

            </Style.Selection>

            <Style.TitleCategorie>{'EDUCATION PRIMAIRE'}</Style.TitleCategorie>

          <Style.SliderItem>
              {categorieJson?.map((item: any, key: any) => (
                  <div>
                  <Thematique data={item} key={key} />
                  </div>
              ))}
          </Style.SliderItem>
          
          <Style.Slider>
            {categorieJson?.map((item: any, key: any) => (
              <div>
                <ItemPlaylist data={item} key={key} />
              </div>
            ))}
          </Style.Slider>
      
        </Style.PageCategorieContent>

    </Style.PageCategorieWrapper>
  );
};
