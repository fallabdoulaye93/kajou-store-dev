import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import {BORDER_RADIUS, BREAKPOINTS, FONT_SIZE, media} from '@app/styles/themes/constants';
import {Collapse} from "@app/components/common/Collapse/Collapse";

export const SectionWrapper = styled.div`
  // margin-top: 3%;
   padding-left:3%;
`;

export const CarouselWrapper = styled.div`
  margin-top: 15px;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;
  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;


export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-top: 25px;
`;

export const Titre = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  line-height: 36px;
`;


export const Image = styled.img`
  position: relative;
  margin-left: -5%;
  margin-top: -6%;
  width: 110%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 1.25rem;
  border-radius: ${BORDER_RADIUS};

  background-color: var(--background-color);

  @media only screen and ${media.md} {
    padding: 2.5rem 6.25rem 6.25rem;
  }

  @media only screen and ${media.xl} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 12.5rem 3.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${media.xl} {
    margin-right: 7.5rem;
  }
`;


export const TextCollab = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0rem;
  line-height: 21px;
  color: black;
  margin-top: 2rem;
  @media only screen and ${media.md} {
    font-size: 24px;
    line-height: 37px;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled(Typography.Text)`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0rem;
  line-height: 37px;
  color: black;

  @media only screen and ${media.md} {
    font-size: 3rem;
    line-height: 57px;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and ${media.xl} {
    font-size: 4rem;
    margin-bottom: 2.25rem;
  }
`;

export const Text = styled(Title)`
  font-size: 0.875rem;
  margin-bottom: 1.25rem;

  @media only screen and ${media.md} {
    font-size: 1.12rem;
    margin-bottom: 1.45rem;
  }

  @media only screen and ${media.xl} {
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
  }
`;


export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.425rem;
  height: 13px;
  margin-left: -5px;
  margin-top: 0px;
`;

export const Contenus = styled.div`
   font-size: 10px;
   margin-top: 10px;
   @media only screen and ${media.md} {
      font-size: 20px;
      line-height: 18px;
   }
   font-weight: 400;
   width: 100%;
   line-height: 13px;
`;

export const Description = styled.div`
   font-size: 13px;
   
   margin-top: 20px;
   @media only screen and ${media.md} {
      font-size: 23px;
      line-height: 42px;
   }
   font-weight: 500;
   width: 100%;
   line-height: 22px;
`;
export const BlocWrapper = styled.div`
  margin-left: -5px;
  margin-top: 0px;
`;
export const BlocFilter = styled.div`
  padding: 3px;
`;
export const ItemFilter = styled.div`
  padding: 3px;
  background-color: #F9F9F9;
  border-radius: 5px;
`;
export const PartnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 13px;
`;

export const CollapseWrapper = styled(Collapse)`
  margin-top: 15px;
  width: 100%;
`;
