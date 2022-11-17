import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";

export const ItemKajouAlaUneCard = styled(Card)`
  margin: 0rem;
`;

export const Title = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xxs};
  font-weight: ${FONT_WEIGHT.medium};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;

  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  & > div {
    display: block;
  }
`;

