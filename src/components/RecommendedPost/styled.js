import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
	background: #192734;
	display: flex;
`

export const RecommendedLink = styled(Link)`
	align-items: center;
	background: #192734;
	color: #1fa1f2;
	display: block;
	padding: 3rem;
	text-decoration: none;
	transition: background 0.5s;
	width: 50%;
	text-align: right;

	&:hover {
		background: #38444d;
	}
	&.previous {
		border-right: 1px solid #38444d;
	}
	&.next {
		justify-content: flex-end;
	}
	&.previous:before {
		content: "\\2190";
		margin-right: 0.5rem;
	}
	&.next:after {
		content: "\\2192";
		margin-left: 0.5rem;
	}

	&:first-child {
		text-align: left;
	}
`
