import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';
import * as Style from './SeedItem.styles';

import {getCartesKajou, getCartesKajouTest} from "@app/api/LesCartesKajou.api";
import {CartesKajouData} from "@app/api/LesCartesKajou.api";
import {Col, notification, Row,Image, Button, Tooltip} from "antd";

import Slider from "react-slick";




import slider from "react-slick";
import axios from 'axios'

export const SeedItem: React.FC = () => {


  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
   
  
    useEffect(()=>{
      axios.get('https://38j09psm0a.execute-api.eu-west-3.amazonaws.com/dev/stox',axiosConfig)
      .then((res) => { 
        console.log(res.data);
      }) 
    },[])   

  const [data, setData] = useState<CartesKajouData[]>([]);
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    getCartesKajou().then((result) => {
      setData(result);
    });
  }, []);

  const handleButtonClick = (e:any) => {
   
    console.log('click left button', e);
  };
  

  return (
      <Style.ScrollWrapper>

      
      
  
      </Style.ScrollWrapper>
  );
};
