
import React, {useEffect, useState} from 'react';
import * as S from './DetailsSeedComponent.styles';
import {Row} from "antd";
import {useLocation} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {SeedsData} from "@app/api/seeds.api";
import {ItemSeedCardListMode} from "@app/components/ItemSeedCardListMode/ItemSeedCardListMode";

import npListGray from '@app/assets/images/np_list_gray.png';
import npListGreen from '@app/assets/images/np_list_green.png';
import npThumbnailGray from '@app/assets/images/np_thumbnails_gray.png';
import npThumbnailGreen from '@app/assets/images/np_thumbnails_green.png';
import {ItemSeedCardThumbnailMode} from "@app/components/ItemSeedCardThumbnailMode/ItemSeedCardThumbnailMode";
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import * as  API from '@app/api/store.api';

interface KajouSeedProps {
    seedDetails?: SeedsData;
}

export const DetailsSeedComponent: React.FC<KajouSeedProps> = ({seedDetails}) => {
    const { state } = useLocation();
    const [seedDetail, setSeedDetail] = useState<any>();
    const [viewList, setViewList] = useState(false);
    const { t } = useTranslation();
    
    const [seed, setSeed] = useState<any>();
  const [dossierThematique, setDossierThematique] = useState<any>();
  const [article, setArticle] = useState<any>();
  const [playlist, setPlaylist] = useState<any>();
  const [ecard, setEcard] = useState<any>();


 const getAllArticle = async () => {
      const resp =  await API.__getAllArticle();
      const respfilter = resp?.filter((artic:any) => artic?.fields?.idparent == state?.data?.id )

      setArticle(respfilter)
      //console.log(respfilter)
  }

    //const location = useLocation();
    // console.log(data?.id) 

    useEffect(() => {
        setSeedDetail(state?.data)
       getAllArticle()
    }, []);


    return (
    
            <S.SectionWrapper>
               
               <HeaderComponent/>
                
                <S.BlocWrapper>
                    <S.InfoHeader>
                        
                        <S.Title>{seedDetail?.title}</S.Title>
                    </S.InfoHeader>
                   
                    <S.Contenus style={{color: "#4ABC96"}}>{seedDetail?.nbrevideo} {seedDetail?.duration}</S.Contenus>
                    
                    <S.Description>{seedDetail?.description}</S.Description> 
                </S.BlocWrapper>
                
                <S.BlocWrapper>
                    <S.BlocFilter style={{right: "0px",position: "absolute"}}>
                        <Row gutter={[10, 24]}>
                            <S.ItemFilter onClick={() => setViewList(true)} style={{position: "absolute", right: "40px", display: "inline-block"}} >
                                <img width={'20px'} src={viewList ? npListGreen : npListGray} alt="" />
                            </S.ItemFilter>
                            <S.ItemFilter onClick={() => setViewList(false)}   style={{position: "absolute", right: "0px", display: "inline-block"}} >
                                <img width={'20px'}  src={viewList ? npThumbnailGray : npThumbnailGreen} alt="" />
                            </S.ItemFilter>
                        </Row>
                    </S.BlocFilter>

                </S.BlocWrapper>

                <S.BlocWrapper style={{marginTop: '50px'}}>
                  
                    
                        {
                                    article?.map((item: any, key: any) => (
                                        viewList ?
                                        <div>
                                        <ItemSeedCardListMode seedDetails={item.fields} key={key} />
                                        </div>
                                        :
                                        <div>
                                        <ItemSeedCardThumbnailMode seedDetails={item.fields} key={key} />
                                        </div>
                                    ))
                        }
                        
                </S.BlocWrapper>
            </S.SectionWrapper>
        // </Col>
    );
};














// import React, {useEffect, useMemo, useRef, useState} from 'react';
// import * as S from './DetailsSeedComponent.styles';
// import {Col, Image, notification, Row} from "antd";
// import {useLocation} from 'react-router-dom';
// import {useTranslation} from "react-i18next";
// import {SeedsData} from "@app/api/seeds.api";
// import arrowLeft from '@app/assets/images/arrow_left.png';
// import npSearch from '@app/assets/images/np_search.png';
// import {ItemSeedCardListMode} from "@app/components/ItemSeedCardListMode/ItemSeedCardListMode";
// import {IContenuGraine} from "@app/components/ContenuGraine/ContenuGraine";

// import npListGray from '@app/assets/images/np_list_gray.png';
// import npListGreen from '@app/assets/images/np_list_green.png';
// import npThumbnailGray from '@app/assets/images/np_thumbnails_gray.png';
// import npThumbnailGreen from '@app/assets/images/np_thumbnails_green.png';
// import {ItemSeedCardThumbnailMode} from "@app/components/ItemSeedCardThumbnailMode/ItemSeedCardThumbnailMode";
// import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
// import * as  API from '@app/api/store.api';

// interface KajouSeedProps {
//     seedDetails?: SeedsData;
// }

// export const DetailsSeedComponent: React.FC<KajouSeedProps> = ({seedDetails}) => {
//     const { state } = useLocation();
//     const [data, setData] = useState<SeedsData>();
//     const [viewList, setViewList] = useState(false);
//     const { t } = useTranslation();
    
//     const location = useLocation();
//     console.log(state) 

//     useEffect(() => {
//        setData(state.data)
//     }, []);


//     return (
//         // <Col xs={24} md={24}>
//             <S.SectionWrapper>
//                 {/* <S.BlocWrapper style={{marginTop: '20px'}}> */}
//                     {/* <img width={'20px'} style={{display: "inline-block"}} src={arrowLeft} alt="" />
//                     <img width={'20px'} style={{position: "absolute", right: "0px", display: "inline-block"}} src={npSearch} alt="" /> */}
//                <HeaderComponent/>
//                 {/* </S.BlocWrapper> */}
//                 <S.BlocWrapper>
//                     <S.InfoHeader>
//                         {/* <S.Title>{state.data?.titre}</S.Title> */}
//                         <S.Title>{data?.title}</S.Title>
//                     </S.InfoHeader>
//                     {/* <S.Contenus style={{color: "#4ABC96"}}>{state.data?.contenus}</S.Contenus> */}
//                     <S.Contenus style={{color: "#4ABC96"}}>{data?.nbrevideo} {data?.duration}</S.Contenus>
//                     {/* <S.Description>{state.data?.descriptionGlobale}</S.Description> */}
//                     <S.Description>{data?.description}</S.Description> 
//                 </S.BlocWrapper>
                
//                 <S.BlocWrapper>
//                     <S.BlocFilter style={{right: "0px",position: "absolute"}}>
//                         <Row gutter={[10, 24]}>
//                             <S.ItemFilter onClick={() => setViewList(true)} style={{position: "absolute", right: "40px", display: "inline-block"}} >
//                                 <img width={'20px'} src={viewList ? npListGreen : npListGray} alt="" />
//                             </S.ItemFilter>
//                             <S.ItemFilter onClick={() => setViewList(false)}   style={{position: "absolute", right: "0px", display: "inline-block"}} >
//                                 <img width={'20px'}  src={viewList ? npThumbnailGray : npThumbnailGreen} alt="" />
//                             </S.ItemFilter>
//                         </Row>
//                     </S.BlocFilter>

//                 </S.BlocWrapper>

//                 <S.BlocWrapper style={{marginTop: '50px'}}>
//                     {/* {!!state?.data?.contenuGraine?.length && (
//                         <>
//                             {state.data?.contenuGraine.map((seed: { contenuGraine: IContenuGraine; id: React.Key | null | undefined; }) => (
//                                 viewList ? <ItemSeedCardListMode data={seed.contenuGraine} key={seed.id} /> : <ItemSeedCardThumbnailMode data={seed.contenuGraine} key={seed.id} />
//                             ))}
//                         </>
//                     )} */}
                    
//                         {
//                                     article?.map((item: any, key: any) => (
//                                         <div>
//                                         <ItemSeedCardListMode seedDetails={item.fields} key={key} />
//                                         </div>
//                                     ))
//                         }
                        
//                 </S.BlocWrapper>
//             </S.SectionWrapper>
//         // </Col>
//     );
// };


