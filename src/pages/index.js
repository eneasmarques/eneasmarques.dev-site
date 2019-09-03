import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="black"
      category="Misc"
      date="01 de Setembro de 2019"
      timeToRead="4"
      title="What is Lorem Ipsum?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry."
    />
  </Layout>
)

export default IndexPage
