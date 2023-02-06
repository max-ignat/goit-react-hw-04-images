import styled from '@emotion/styled';
import { ThreeCircles } from 'react-loader-spinner';

export const AppWrapperDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
`;


export const Message = styled.p`
font-size: 20px;
font-weight:600;
text-align: center;
color: lightgray;
`

export const Spiner = styled(ThreeCircles)`
margin-left: 150px;
`
// height="100"
//   width="100"
//   color="#4fa94d"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
//   ariaLabel="three-circles-rotating"
//   outerCircleColor=""
//   innerCircleColor=""
//   middleCircleColor=""