import React from 'react';
import { Image} from 'antd';
import * as Style from './Event.styles';
import event from '@app/assets/images/event.png'
import arrowReturn from '@app/assets/images/arrowReturn.png'
import { InfoCircleFilled } from '@ant-design/icons';

const Data= 
{
  "partenaire": "Nom du partenaire",
  "date_fin" : "Se termine dans 2 jours",
  "titre" : "Run for the climate Dakar",
  "contenus": "Participez à la grande course pour le climat à Dakar et gagnez des centaines de cartes Kajou!"
}

    export const Event: React.FC = () => {
    
  return (
     
       <Style.EventWrapper>  
       
            <Image width='100%' src={event} preview={false}/> 
            <Style.ImageAbsolute>
              <Image width='10%' src={arrowReturn} preview={false}/> 
            </Style.ImageAbsolute> 
            <Style.DateEvent>{Data.partenaire}   <InfoCircleFilled style={{ fontSize: '6px' }}/> {Data.date_fin} </Style.DateEvent>
           
            <Style.TitreEvent>{Data.titre}</Style.TitreEvent>
            <Style.ContenusEvent>{Data.contenus}</Style.ContenusEvent>
       </Style.EventWrapper>

  );
};
