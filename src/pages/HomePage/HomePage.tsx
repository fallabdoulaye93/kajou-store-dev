import React, {useEffect, useState} from 'react';
import { Col, Row } from 'antd';
import {TabPane, Tabs} from "@app/components/common/Tabs/Tabs";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Header} from "@app/components/header/Header";
import {MainHeader} from "@app/components/layouts/main/MainHeader/MainHeader";
import PrefUserPage1 from "@app/pages/PrefUsersPages/PrefUserPage1";
import LesCartesKjouPage from "@app/pages/LesCartesKjouPage";
import { DossierThematique } from '@app/pages/DossierThematique'
import {MostView} from '@app/pages/MostView'
import ForYouPage from "@app/pages/ForYouPage";
import { PageCategorie } from '@app/components/PageCategorie/PageCategorie';
import { PageSousCategorie } from '@app/components/PageSousCategorie/PageSousCategorie';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [isPrefSet, setIsPrefSet] = useState("false");
  const navigate = useNavigate();
  const HomeLayout = (

    <Row gutter={[20, 24]}>
      <Col span={24}>
          <Header/>
      </Col>
      <Col span={24}>
          <Tabs defaultActiveKey="1">
              <TabPane tab={`${t('tabs.for_you')}`} key="1">
                  <ForYouPage/>
              </TabPane>
              <TabPane tab={`${t('tabs.kajou_cards')}`} key="2">
                  <LesCartesKjouPage />
              </TabPane>
              <TabPane tab={`${t('tabs.most_seen')}`} key="3">
                  <MostView />
              </TabPane>
          </Tabs>
      </Col>
    </Row>
  );
  
  useEffect(() => {

  }, []);
  return <>{HomeLayout}</>;
        

};

export default HomePage;
