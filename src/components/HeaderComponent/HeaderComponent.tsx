import React, {useEffect, useRef, useState} from 'react';

import * as Style from './HeaderComponent.styles';
import {Image} from "antd";
import {useNavigate} from "react-router-dom";
import arrowReturn from '@app/assets/images/arrowReturn.png'
import search from '@app/assets/images/search.png'

export const HeaderComponent: React.FC = () => {

    const navigate = useNavigate();
    const handleButtonClick = (e:any) => {
        navigate(-1)
      };

  return (
    <Style.HeaderComponent>
            
    <Style.HeaderLeft>
    <Image src={arrowReturn} preview={false} width={'20%'} onClick={handleButtonClick} />
    </Style.HeaderLeft>

    <Style.HeaderRight>
    <Image src={search} preview={false} width={'14%'} />
    </Style.HeaderRight>

</Style.HeaderComponent>

          )
        };
    
