import React, {useEffect, useMemo, useState} from 'react';
import { Col, Row } from 'antd';
import * as S from "@app/pages/PrefUsersPages/PrefUserPage.styles";
import {useTranslation} from "react-i18next";
import rightArrowImg from "@app/assets/images/right-arrow-orange.png";
import { Progress } from '@app/components/common/Progress/Progress';
import {useNavigate} from "react-router-dom";

const PrefUserPage3: React.FC = () => {
    const [percent, setPercent] = useState<number>(0);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [colorProgress, setColorProgress] = React.useState("red");

    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            setTimeout(function () {
                let newPercent = percent + 1;
                if (newPercent == 100) {
                    setColorProgress("green")
                }
                if (newPercent > 100) {
                    newPercent = 100;
                    localStorage.setItem('is_pref_set', 'true');
                    navigate('/home')
                }
                setPercent(newPercent);
            }, 100);
        }

    }, [percent]);

    const mobileAndTabletLayout = (

        <Col span={24} style={{margin: "0px", top: "20%"}}>
            <Col span={24} style={{textAlign: "center", marginTop: "20px"}}>
                <Row gutter={[24, 24]}>
                    <Col span={4} />
                    <Col span={16}>
                        <S.MerciText>{t('user_pref.merci_text')}</S.MerciText>
                        <S.PersoExperience>{t('user_pref.perso_exp_text')}</S.PersoExperience>
                    </Col>
                    <Col span={4} />
                </Row>
            </Col>

            <Col span={24} style={{textAlign: "center", marginTop: "20px"}}>
                <Row gutter={[24, 24]}>
                    <Col span={4} />
                    <Col span={16}>
                        <Progress type="circle" percent={percent} strokeColor={colorProgress} />
                    </Col>
                    <Col span={4} />
                </Row>
            </Col>
            <Col span={24} style={{textAlign: "center", marginTop: "20px"}}>
                <Row gutter={[24, 24]}>
                    <Col span={2} />
                    <Col span={20}>
                        <S.ProgressText1>
                            {percent <= 35 && ""}
                            {(percent <= 70 && percent > 35) && t('user_pref.progress_text_1')}
                            {(percent <= 100 && percent > 70) && t('user_pref.progress_text_2')}
                        </S.ProgressText1>
                        <Row gutter={[24, 24]}>
                            <Col span={24} style={{textAlign: "center", marginTop: "0px"}}>
                                <img width={'11px'} style={{display: "inline-block", marginRight: '7px'}} src={rightArrowImg} alt="" />
                                <S.ProgressText2>
                                    {percent <= 35 && t('user_pref.progress_text_1')}
                                    {(percent <= 70 && percent > 35) && t('user_pref.progress_text_2')}
                                    {(percent <= 100 && percent > 70) && t('user_pref.progress_text_3')}
                                </S.ProgressText2>
                            </Col>
                        </Row>
                        <S.ProgressText3>
                            {percent <= 35 && t('user_pref.progress_text_2')}
                            {(percent <= 70 && percent > 35) && t('user_pref.progress_text_3')}
                            {(percent <= 100 && percent > 70) && ""}
                        </S.ProgressText3>
                    </Col>
                    <Col span={2} />
                </Row>

            </Col>
        </Col>

    );
    return (
        <>
            {mobileAndTabletLayout}
        </>
    );
};
export default PrefUserPage3;
