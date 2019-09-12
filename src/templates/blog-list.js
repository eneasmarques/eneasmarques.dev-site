import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const BlogList = props => {
	console.log(props)
	const postList = props.data.allMarkdownRemark.edges

	const { numPages, currentPage } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
	const nextPage = `/page/${currentPage + 1}`

	return (
		<Layout>
			<SEO title="Home" />
			{postList.map(
				({
					node: {
						frontmatter: { title, category, date, description, background },
						timeToRead,
						fields: { slug },
					},
				}) => (
					<PostItem
						slug={slug}
						background={background}
						category={category}
						date={date}
						timeToRead={timeToRead}
						title={title}
						description={description}
					/>
				)
			)}
			<Pagination
				isFirst={isFirst}
				isLast={isLast}
				numPages={numPages}
				currentPage={currentPage}
				prevPage={prevPage}
				nextPage={nextPage}
			/>
		</Layout>
	)
}

export const query = graphql`
	query PostList($limit: Int!, $skip: Int!) {
		allMarkdownRemark(
			sort: { order: DESC, fields: frontmatter___date }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					frontmatter {
						title
						category
						description
						background
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
					}
					timeToRead
					fields {
						slug
					}
				}
			}
		}
	}
`

export default BlogList
