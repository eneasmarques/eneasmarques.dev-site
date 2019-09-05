import styled from "styled-components"

export const PaginationWrapper = styled.section`
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  align-items: center;
  color: white;

  a {
    color: #fff;
    height: 1.5rem;
    transition: color 0.5s;

    &:hover {
      color: #1b95e0;
    }
  }
`
