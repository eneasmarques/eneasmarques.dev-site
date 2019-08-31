import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`
export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
`
export const SocialLinksItem = styled.li``
export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  height: 2rem;
  width: 2rem;
`
