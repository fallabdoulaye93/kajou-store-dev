import React from 'react';
import {Col, Row, Space} from 'antd';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import * as S from '@app/pages/PrefUsersPages/PrefUserPage.styles';
import {ItemKajouThematique} from "@app/components/ItemKajouThematique/ItemKajouThematique";
import {Button} from "@app/components/common/buttons/Button/Button";
import nbwcOrangeWhite from '@app/assets/images/nbwcOrangeWhite.png';
import {KajouButton} from "@app/components/common/buttons/KajouButton/KajouButton";

const PrefUserPage1: React.FC = () => {
  const primaryColor = '#FC6854';
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/pref-user-2');
    };

  const PrefUserPage1Layout = (
      <>
          <Col style={{marginTop: 15}} span={24}>
              <Col>
                  {t('user_pref.customize_experience_text')}
              </Col>
              <Col style={{marginTop: 20}}  span={24}>
                  <div>
                      <S.Progress1  style={{display: "inline-block", width: '50%'}} percent={100} showInfo={false} strokeColor={primaryColor} />
                      <S.Progress2 style={{display: "inline-block", width: '50%'}} percent={100} showInfo={false} strokeColor={'#D9D9D9'} />
                  </div>
              </Col>
              <Col style={{marginTop: 5}} span={20}>
                  <Row>
                      <S.ThematiqueDescription>{t('user_pref.select_thematique_text')}</S.ThematiqueDescription>
                  </Row>
              </Col>
              <Col style={{marginTop: 25, marginLeft: '2%'}} span={24}>
                  <ItemKajouThematique />
              </Col>
              <Row style={{marginTop: '50px'}} gutter={[24, 24]}>
                  <KajouButton style={{padding: '10px 1px 10px 15px', textAlign: 'center', margin:'0 auto'}} onClick={handleClick} shape={"round"}>
                      {t('buttons.valider')} <img width={'35px'} style={{marginLeft: '12px'}} src={nbwcOrangeWhite} alt="" />
                  </KajouButton>
              </Row>
          </Col>
      </>

  );
  
  return (
    <>
      {PrefUserPage1Layout}
    </>
  );
};

export default PrefUserPage1;
