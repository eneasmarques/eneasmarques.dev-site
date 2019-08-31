import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const SideBar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
    </S.SidebarWrapper>
  )
}

export default SideBar
