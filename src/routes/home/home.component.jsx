import { Fragment } from "react";
import  MyPhoto  from '../../assets/niall.jpg';
import 
{ HomeContainer,
HeyContainer,
ImageContainer } from "./home.styles";
const Home = () =>{
    return(
        <Fragment>
            <HomeContainer>
                <HeyContainer>
                <h1>Hey there!</h1>
                 <h1>I am Nafisha Salsabil</h1>
                </HeyContainer>
                <ImageContainer>
                   <img src = {MyPhoto} alt="me"></img>
                 </ImageContainer>
            </HomeContainer> 

        </Fragment>
       
    )
}
export default Home;