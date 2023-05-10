import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
 background: white;
  color: rgb(13, 26, 38);
  position: fixed;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  z-index: 10;
  justify-content: space-between;

  @media(max-width: 768px) {
    
      width: 90%;
    }
   @media(max-width: 638px) {
      
        width: 100%;
      
    } 
`;

export const Logo = styled.div`
 float: left;
  margin-left: 28px;
  padding: 0px  5px;
  
  
`;

export const HeadName = styled.h1`
  font-size:1.8em;
  color: rgb(13, 26, 38);
  display: block;
  margin: 10px 22px;
  padding: 0px 6px;
  position: relative;
  text-decoration: none;

  @media(max-width: 768px) {
  display:block;
 } 
`;

export const NavLinks = styled.div`
 margin: 10px;
  text-align: center;
  width: 70%;
  float: right;
  
 @media(max-width: 640px) {
  display:flex;
  width:100%;
  margin: 5px;
    flex-direction:row;
   
 } 

 @media(orientation: landscape) {
     
        display: inline-block;
      }
`;
export const NavLi = styled.li`
 display: inline-block;
 @media(max-width: 640px) {
  
  font-size:0.7em;
 } 
`;

export const StyledNavLink = styled(NavLink)`

  color: rgb(13, 26, 38);
  display: block;
  font-size: 0.9em;
  font-weight:normal;
  height: 50px;
  letter-spacing: 1px;
  margin: 0 20px;
  padding: 0 4px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;

  @media(max-width: 640px) {
  
  padding:0px;
 } 


/* Animated Bottom Line */

&:before, &:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 1px;
  bottom: -1px;
  background: rgb(13, 26, 38);
}

&:before {
  left: 0;
  transition: 0.5s;
}

&:after {
  background: rgb(13, 26, 38);
  right: 0;
  /* transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); */
}

&:hover:before {
  background: rgb(13, 26, 38);
  width: 100%;
  transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
}

&:hover:after {
  background: transparent;
  width: 100%;
  /* transition: 0s; */
}

&.active {
  font-weight:bold;
  border-bottom: 2px solid black;
}

`;
 

export const MenuIcon = styled.div`
    @media(max-width: 640px) {
    cursor: pointer;
    display: block;
    position: fixed;
    right: 15px;
    top: 20px;
    height: 23px;
    width: 27px;
    z-index: 12;
    }
  
`; 

export const IconBars = styled.span`
   @media(max-width: 640px) {
    background: rgb(13, 26, 38);
    position: absolute;
    left: 1px;
    top: 45%;
    height: 2px;
    width: 20px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
   }
`;