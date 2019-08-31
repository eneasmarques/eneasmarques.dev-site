import React from "react"

import { Grid } from "styled-icons/boxicons-solid/Grid"
import { Home } from "styled-icons/boxicons-solid/Home"
// import { Lightbulb as LightOn } from "styled-icons/fa-solid/Lightbulb"
import { Lightbulb as LightOff } from "styled-icons/fa-regular/Lightbulb"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <LightOff />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
