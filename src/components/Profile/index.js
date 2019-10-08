import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Avatar from "../Avatar"

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, position, description },
		},
	} = useStaticQuery(
		graphql`
			query MyQuery {
				site {
					siteMetadata {
						title
						position
						description
					}
				}
			}
		`
	)

	return (
		<S.ProfileWrapper>
			<S.ProfileLink>
				<Avatar />
				<S.ProfileTitle>{title}</S.ProfileTitle>
				<S.ProfileAuthor>{position}</S.ProfileAuthor>
			</S.ProfileLink>
			<S.ProfileDescription>{description}</S.ProfileDescription>
		</S.ProfileWrapper>
	)
}

export default Profile
