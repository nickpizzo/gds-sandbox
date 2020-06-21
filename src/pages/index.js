import React from "react"
import About from "../components/Test"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
  </Layout>
)

export default IndexPage
