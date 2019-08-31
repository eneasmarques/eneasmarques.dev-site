import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"

import * as S from "./styled"
import SideBar from "../Sidebar"
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <SideBar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
