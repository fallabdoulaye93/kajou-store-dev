import React, {useEffect, useState} from 'react';
import * as S from './CardAvailability.styles';
import {useTranslation} from "react-i18next";
import {Panel} from "@app/components/common/Collapse/Collapse";
import npTriangle from '@app/assets/images/npTriangle.png';
import npMicroSd from '@app/assets/images/npMicrosd.png';
import {Col, Image, Row} from "antd";
import {Progress} from "@app/components/common/Progress/Progress";
import nbwcOrangeWhite from "@app/assets/images/nbwcOrangeWhite.png";
import {KajouButton} from "@app/components/common/buttons/KajouButton/KajouButton";

export interface ICardAvailability {
  name: string;
  description: string;
  tarif: string;
  active: boolean;
}

interface CardAvailabilityProps {
  name: string;
  description?: string;
  tarif?: string;
  active?: boolean;
}

export const CardAvailability: React.FC<CardAvailabilityProps> = ({ name,  description, tarif,active, ...otherProps }) => {

    const { t } = useTranslation();
    useEffect(() => {
        {name==='ecard' ? setIsEcard(true): setIsEcard(false)}
        {isEcard ? setBorderColor("#0263B5") : "#4ABC96"}
    }, []);
    const [isEcard, setIsEcard] = useState(false);
    const [borderColor, setBorderColor] = useState("");

    return (
        <S.CollapseWrapper defaultActiveKey={['1']} style={{borderColor: isEcard ? '#0263B5' : '#4ABC96'}} {...otherProps}>
            <Panel showArrow={false} style={{backgroundColor: isEcard ? '#0263B5' : '#4ABC96', borderRadius: '10px 10px 10px 10px'}} extra={<S.Image preview={false} src={npTriangle} />} header={<><S.ImageCarteSD preview={false} src={npMicroSd} /><S.Espace />{isEcard ? t('les_cartes_kajou.ecard') : t('les_cartes_kajou.sdcard')}</>} key="1">
                <S.Description>{description}</S.Description>
                <Row gutter={[24, 24]}>
                    <S.Tarif  style={{textAlign: "center", marginTop: "20px", flex: "auto"}}>{tarif}</S.Tarif>
                </Row>

                <Row style={{marginTop: "20px", marginBottom: "10px"}}>
                    <KajouButton style={{padding: '10px 1px 10px 15px', margin:'auto'}} shape={"round"}>
                        { isEcard ? t('buttons.activer') : t('buttons.commander')} <img width={'35px'} style={{marginLeft: '12px'}} src={nbwcOrangeWhite} alt="" />
                    </KajouButton>
                </Row>

            </Panel>

        </S.CollapseWrapper>
  );
};


