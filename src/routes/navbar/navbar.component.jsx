import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
    NavigationContainer,
    NavLinks,
    StyledNavLink,
    NavLi,
    Logo,
    HeadName,
    OverlayMenu,
    MenuIcon
  } from './navbar.styles';

  
  const Navbar = () =>{
    return (
    <Fragment>
    <NavigationContainer>
    {/* -- Navbar Logo -- */}
    <Logo>
      {/* <!-- Logo Placeholder for Inlustration --> */}
      <HeadName>Nafisha</HeadName>
      {/* <i className="fas fa-chess-knight"></i>Nafisha */}
    </Logo>
    <NavLinks>
    <NavLi>
     <StyledNavLink to='/' activeClassName="active">Home</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/projects'>Projects</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/skills'>Skills</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/about' activeClassName="active">About</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/contact'>Contact</StyledNavLink>
     </NavLi>
     
      </NavLinks>
      </NavigationContainer>
      <Outlet />

      <MenuIcon>
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </MenuIcon>
{/* 
<OverlayMenu>
<NavLinks>
    <NavLi>
     <StyledNavLink to='/' activeClassName="active">Home</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/projects'>Projects</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/skills'>Skills</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/about' activeClassName="active">About</StyledNavLink>
     </NavLi>
     <NavLi>
     <StyledNavLink to='/contact'>Contact</StyledNavLink>
     </NavLi>
     
      </NavLinks>
   
</OverlayMenu> */}
    </Fragment>

      

    );
}

export default Navbar;