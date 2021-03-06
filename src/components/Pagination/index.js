import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>« anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage}>próxima »</Link>}
  </S.PaginationWrapper>
)

export default Pagination
