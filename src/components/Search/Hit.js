import React from "react"

import PostItem from "../PostItem"

const Hit = ({ hit }) => (
	<PostItem
		slug={hit.fields.slug}
		category={hit.category}
		background={hit.background}
		date={hit.date}
		timeToRead={hit.timeToRead}
		title={hit.title}
		description={hit.description}
	/>
)

export default Hit
