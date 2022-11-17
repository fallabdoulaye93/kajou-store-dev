import styled from 'styled-components';
import {media} from '@app/styles/themes/constants';


export const MostViewComponentWrapper = styled.div`
  padding-left:3%;
  @media only screen and ${media.md} {
}
`;

export const Dropdown = styled.div`
    margin-top:1rem;
    margin-bottom:2rem;
    width:70%;
    background-color:#979797;

  @media only screen and ${media.md} {
    margin-top:2rem;
    margin-bottom:4rem;
    //width:30rem;
  }
`;
