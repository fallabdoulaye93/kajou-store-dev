import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BREAKPOINTS } from '@app/styles/themes/constants';

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

export const Col = styled.div`
    #components-grid-demo-flex [class~='ant-row'] {
        background: rgba(128, 128, 128, 0.08);
    }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 0.625rem;
`;

export const ArrowBtn = styled(Button)`
  color: var(--text-nft-light-color);
`;
