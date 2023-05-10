import styled from 'styled-components';

export const HomeContainer = styled.div`

margin-top :80px;
display: flex;
width:100%;
align-items: center;
justify-content:space-between;
float-direction:row;
@media(max-width: 768px) {
    float-direction:column;
}

`; 

export const HeyContainer = styled.div`
   font-size: 20px;
  padding-left: 20px;
  float:left;
  width:60%;
  text-align: center;
  justify-content: center;
  align-items: center;
 
  
`;

export const ImageContainer = styled.div`
    width:40%;
    max-width: 100%;
    max-height: 100%;
    float:right;
    @media(max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
 } 
`;