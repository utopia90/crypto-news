import React from 'react'
import { StyledNavbar, StyledNavLink, StyledNavLinkContainer } from './Navbar.styles'

export default function Navbar() {
  return (
    <StyledNavbar color="#5741d9">
        <StyledNavLinkContainer>
        <StyledNavLink color='#FFFFFF'>News+</StyledNavLink>
        <StyledNavLink color='#FFFFFF'>Guides</StyledNavLink>
        <StyledNavLink color='#FFFFFF'>Exchanges</StyledNavLink>
        <StyledNavLink color='#FFFFFF'>Contact</StyledNavLink>
        </StyledNavLinkContainer>
    </StyledNavbar>
  )
}
