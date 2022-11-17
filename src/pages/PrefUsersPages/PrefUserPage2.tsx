import React, {useEffect, useMemo, useState} from 'react';
import { Col, Row } from 'antd';
import {useTranslation} from "react-i18next";
import * as S from "@app/pages/PrefUsersPages/PrefUserPage.styles";
import {Button} from "@app/components/common/buttons/Button/Button";
import nbwcOrangeWhite from "@app/assets/images/nbwcOrangeWhite.png";
import { Option } from '@app/components/common/selects/Select/Select';
import {getKajouLangs, KajouLangsprefItem} from "@app/api/userPreference.api";
import {ItemLangButton} from "@app/components/ItemKajouLangPref/Item-Kajou-Lang-Pref/ItemLangButton";
import {SelectOptionButton} from "@app/components/ItemKajouLangPref/Item-Kajou-Lang-Pref/SelectOptionButton";
import {useNavigate} from "react-router-dom";
import {KajouButton} from "@app/components/common/buttons/KajouButton/KajouButton";

const PrefUserPage2: React.FC = () => {

    const primaryColor = '#FC6854';
    const { t } = useTranslation();
    const [items, setItems] = useState<KajouLangsprefItem[]>([]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pref-user-3');
    };

    useEffect(() => {
        getKajouLangs().then((result) => {
            setItems(result);
        });
    }, []);

    const buttonLangs = useMemo(() => {
        return {
            listButtonLanguagesKajou: items.map((item) => <ItemLangButton key={item.id} itemKajouLangspref={item}  />),
        };
    }, [items]);

    const selectOptionLangs = useMemo(() => {
        return {
            listSelectOptionKajou: items.map((item) => <SelectOptionButton key={item.id} itemKajouLangspref={item}  />),
        };
    }, [items]);


    const PrefUserPage2Layout = (
        <Row gutter={[20, 24]}>
            <Col span={5}>
            </Col>
            <Col span={20}>
                {t('user_pref.customize_experience_text')}
            </Col>
            <Col span={24}>
                <div>
                    <S.Progress1  style={{display: "inline-block", width: '50%'}} percent={100} showInfo={false} strokeColor={'#D9D9D9'} />
                    <S.Progress2 style={{display: "inline-block", width: '50%'}} percent={100} showInfo={false} strokeColor={primaryColor} />
                </div>
            </Col>

            <Col span={24}>
                <Col span={20}>
                    <Row gutter={[25, 0]}>
                        <S.LanguePrincipaleText>{t('user_pref.langue_princ_contenu_text')}</S.LanguePrincipaleText>
                    </Row>
                </Col>
            </Col>


            <Col span={24}>
                <S.Select defaultValue="FRANÇAIS (langue par défaut du téléphone)" >
                    <Option value="FRANÇAIS">FRANÇAIS (langue par défaut du téléphone)</Option>
                    <Option value="ANGLAIS">ANGLAIS</Option>
                    <Option value="UKRAINIEN">UKRAINIEN</Option>
                </S.Select>
            </Col>
            <Col span={10}>
            </Col>
            <Col span={20}>
                <Row gutter={[0, 0]}>
                    <S.LanguePrincipaleQuestionText>{t('user_pref.langue_princ_contenu_question_text')}</S.LanguePrincipaleQuestionText>
                </Row>
                <Col span={8}>
                </Col>
                <Row gutter={[0, 0]}>
                    <S.SelectTouteLangueText>{t('user_pref.select_toute_langue_souhaite_text')}</S.SelectTouteLangueText>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[0, 0]}>
                    {buttonLangs.listButtonLanguagesKajou}
                </Row>
            </Col>
            <Col span={24}>
                <Row style={{marginTop: '50px'}} gutter={[24, 24]}>
                    <KajouButton style={{padding: '10px 3px 10px 15px', textAlign: 'center', margin:'0 auto'}} onClick={handleClick} shape={"round"}>
                        {t('buttons.valider')} <img width={'35px'} style={{marginLeft: '12px'}} src={nbwcOrangeWhite} alt="" />
                    </KajouButton>
                </Row>
            </Col>

        </Row>
    );

    return (
        <>
            {PrefUserPage2Layout}
        </>
    );
};

export default PrefUserPage2;
