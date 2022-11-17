import { Typography } from 'antd';
import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY, media, BREAKPOINTS, BORDER_RADIUS } from '@app/styles/themes/constants';
import {ItemThematiqueCard} from "@app/components/ItemKajouThematique/item-thematique-card/ItemThematiqueCard";
import {ThematiqueSelectionCard} from "@app/components/ThematiqueSelectionCard/ThematiqueSelectionCard";

interface CardInternalProps {
  $color: string;
}

export const ItemImage = styled.img`
  animation: imgOut 0.5s;
  padding: 1rem 1.25rem 1.5rem;
  width: 40px;
  height: 40px;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
`;

export const Title = styled(Typography.Title)`
  position: relative;
  animation: titleOut 0.5s;
  padding: 1rem 1.25rem 1.5rem;
  text-align: center;
  &.ant-typography {
    margin-bottom: 0;
    font-size: .4rem;
  }
`;

export const ItemInfo = styled.div`
  padding: 1rem 1.25rem 1.5rem;
`;


export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;

  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }

  @media only screen and ${media.md} {
    margin-bottom: 0.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoHeader = styled.div`
  margin-bottom: 1rem;
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CurrentBidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InfoText = styled.span`
  display: block;
  transition: all 0.5s ease;
  letter-spacing: 0.02em;

  font-weight: ${FONT_WEIGHT.regular};

  font-size: ${FONT_SIZE.xxs};

  font-family: ${FONT_FAMILY.secondary};

  color: var(--text-nft-light-color);

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const CurrentBid = styled(InfoText)`
  font-family: ${FONT_FAMILY.secondary};

  color: var(--text-main-color);
`;

export const BidCrypto = styled.span`
  transition: all 0.5s ease;

  font-size: ${FONT_SIZE.xs};

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Bid = styled(CurrentBid)`
  font-size: ${FONT_SIZE.xs};

  color: var(--text-main-color);

  font-weight: ${FONT_WEIGHT.semibold};

  font-family: ${FONT_FAMILY.main};

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Card = styled(ThematiqueSelectionCard)<CardInternalProps>`
  overflow: hidden;

  & {
      background-color: ${(props) => `${props.$color}`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin:15px;
      width: 100px;
      height: 100px;
      position: relative;
    }

    ${ItemImage} {
      animation: imgIn 0.5s;
      animation-fill-mode: forwards;
    }

    ${Title} {
      animation: titleIn 0.5s ease;
      animation-fill-mode: forwards;

      color: var(--text-secondary-color);
    }

    ${InfoText} {
      color: var(--text-secondary-color);
    }

    ${BidCrypto} {
      color: var(--text-secondary-color);
    }

  @keyframes imgIn {
    99% {
      transform: scale(2);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes imgOut {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes titleIn {
    0% {
      left: 0;
    }

    100% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  @keyframes titleOut {
    0% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }

    100% {
      left: 0;
    }
  }
`;
