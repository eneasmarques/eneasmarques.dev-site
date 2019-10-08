import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const RecommendedPost = ({ previous, next }) => (
	<S.RecommendedWrapper>
		{previous && (
			<S.RecommendedLink to={previous.fields.slug}>
				{previous.frontmatter.title}
			</S.RecommendedLink>
		)}
		{next && (
			<S.RecommendedLink to={next.fields.slug}>
				{next.frontmatter.title}
			</S.RecommendedLink>
		)}
	</S.RecommendedWrapper>
)

RecommendedPost.propTypes = {
	next: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}),
		fields: PropTypes.shape({
			slug: PropTypes.string.isRequired,
		}),
	}),
	previous: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}),
		fields: PropTypes.shape({
			slug: PropTypes.string.isRequired,
		}),
	}),
}

export default RecommendedPost
