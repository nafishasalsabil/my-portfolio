import { Fragment } from "react";
import  MyPhoto  from '../../assets/me2.png';
import 
{ HomeContainer,
HeyContainer,
ImageContainer,
Image ,
Outer} from "./home.styles";
const Home = () =>{
    return(
        <Fragment>
            <HomeContainer>
                <HeyContainer>
                <h1>Hey there,</h1>
                 <h1>I am Nafisha Salsabil</h1>
                 <h2>I am into Software Development</h2>
                </HeyContainer>
                <Outer>                <ImageContainer>
                   <Image src = {MyPhoto} alt="me"></Image>
                 </ImageContainer>
                 </Outer>

            </HomeContainer> 

        </Fragment>
       
    )
}
export default Home;