import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import {BORDER_RADIUS, BREAKPOINTS, media} from '@app/styles/themes/constants';

export const CarouselWrapper = styled.div`
  margin-left: -4.4rem;
  margin-right: -1.25rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Titre = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  line-height: 36px;
  margin-bottom: 0px;
  @media only screen and ${media.md} {
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 600;
    width: 90%;
    line-height: 36px;
  }
  @media only screen and ${media.sm} {
    font-size: 32px;
    font-weight: 600;
    width: 90%;
    line-height: 36px;
  }
`;

export const SectionWrapper = styled.div`
  .slick-slide > div {
    display: flex;
  }

  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
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

export const Image = styled(AntImage)`
  margin-bottom: 4rem;

  @media only screen and ${media.xxl} {
    margin-bottom: 0;
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

export const Title = styled(Typography.Text)`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;

  color: var(--text-main-color);

  @media only screen and ${media.md} {
    font-size: 3rem;
    margin-bottom: 1.75rem;
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
