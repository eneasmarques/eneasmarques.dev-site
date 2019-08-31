import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const SideBar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  )
}

export default SideBar
