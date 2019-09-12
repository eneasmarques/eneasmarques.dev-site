import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
`
export const ProfileLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	transition: color 0.5s;

	&:hover {
		color: #1fa1f2;
	}
`
export const ProfileTitle = styled.h1`
	font-size: 1.6rem;

	&::before,
	:after {
		color: red;
	}

	&::before {
		content: "<";
	}

	&::after {
		content: " />";
	}
`
export const ProfileAuthor = styled.small`
	display: block;
	font-size: 1.2rem;
	font-weight: 300;
	margin: 0.5rem auto 1.5rem;
`
export const ProfileDescription = styled.p`
	font-size: 1rem;
	font-weight: 300;
	line-height: 1.4;
`
