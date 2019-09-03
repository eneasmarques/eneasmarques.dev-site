import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  color: #8899a6;
`
export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 2rem 3rem;
  background-color: #15202b;
`
export const PostItemTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-height: 90px;
  min-width: 90px;
  background: ${props => (props.background ? props.background : "#1b95e0")};
  color: ${props => (props.background ? props.background : "#1b95e0")};
  font-size: 1.1rem;
  text-transform: uppercase;

  span {
    filter: invert(1) grayscale(1) contrast(9);
  }
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  transition: color 0.5s;

  &:hover {
    color: #1b95e0;
  }
`
export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 1.4rem;
  font-weight: 300;
`
export const PostItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`
export const PostItemDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
`
