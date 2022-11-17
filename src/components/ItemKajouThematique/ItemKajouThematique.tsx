import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Row } from 'antd';
import * as S from './ItemKajouThematique.styles';
import {getKajouPref, UserprefItem} from "@app/api/userPreference.api";
import {ItemThematiqueCard} from "@app/components/ItemKajouThematique/item-thematique-card/ItemThematiqueCard";

export const ItemKajouThematique: React.FC = () => {
  const [items, setItems] = useState<UserprefItem[]>([]);

  useEffect(() => {
    getKajouPref().then((result) => {
      setItems(result);
    });
  }, []);

  const elements = useMemo(() => {
    return {
      thematique: items.map((item) => <ItemThematiqueCard key={item.title} itemThematique={item}  />),
    };
  }, [items]);

  return (
      <>
        <S.SectionWrapper>
          <Row gutter={[24, 10]}>
            {elements.thematique}
          </Row>
        </S.SectionWrapper>
      </>
  );
};
