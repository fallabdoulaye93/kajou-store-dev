import React, {useEffect, useState} from 'react';
import {Col, notification, Row} from 'antd';
import {TabPane, Tabs} from "@app/components/common/Tabs/Tabs";
import {useTranslation} from "react-i18next";
import {Navigate, useNavigate} from "react-router-dom";
import {Header} from "@app/components/header/Header";
import {MainHeader} from "@app/components/layouts/main/MainHeader/MainHeader";
import {LanguageType} from "@app/interfaces/interfaces";
import ForYouPage from "@app/pages/ForYouPage";
import LesCartesKjouPage from "@app/pages/LesCartesKjouPage";
import {MostView} from "@app/pages/MostView";
import axios from "axios";
import {Loading} from "@app/components/common/Loading";
import LoadingPage from "@app/pages/LoadingPage";
import * as S from './UIComponentsPage.styles';

const RedirectPage: React.FC = () => {
    const [isPrefSet, setIsPrefSet] = useState("false");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const getDatas = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            uid: localStorage.getItem('android_app_uid')
        }
        axios.post('https://vfyki2yryf.execute-api.eu-west-3.amazonaws.com/Preproduction/store/user_thematique', data).then(res => {
            setData(res.data);

            if(res.data.body == "1")
            {
                //navigate('/home');
                navigate('/pref-user-1');
            }
            else
            {
                navigate('/pref-user-1');
            }
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    useEffect(() => {
        getDatas()
    }, []);
    return <S.Wrapper>
        <S.ContentWrapper>
            <LoadingPage />
        </S.ContentWrapper>
    </S.Wrapper>;


};

export default RedirectPage;
