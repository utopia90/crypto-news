import styled from 'styled-components'

interface NavBarProps{
    color: string
}
export const StyledNavbar = styled.div<NavBarProps>`
display:flex;
  width: 100%;
  height:6rem;
  background: ${p => p.color};
  align-items:center;
`
export const StyledNavLink = styled.a`
  cursor:pointer;
  color: ${p => p.color};
  font-weight: bold;
  width:100%;
`
export const StyledNavLinkContainer = styled.div`
display:flex;
align-items:flex-end;
width:60%;
margin-left:auto;

`
