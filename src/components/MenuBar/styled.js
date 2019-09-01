import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  right: 0;
  position: fixed;
  justify-content: space-between;
  width: 3.75rem;
  height: 100vh;
  background: #15202b;
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuBarLink = styled(Link)`
  display: block;
  text-decoration: none;
`
export const MenuBarItem = styled.span`
  display: flex;
  width: 3.75rem;
  height: 3rem;
  cursor: pointer;

  svg {
    color: #fff;
    margin: auto;
    height: 1.5rem;
    transition: color 0.5s;

    &:hover {
      color: #1b95e0;
    }
  }
`
