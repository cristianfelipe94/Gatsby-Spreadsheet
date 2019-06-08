import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StudentComponent from "../components/studentComponent"
const dataCompleted = require("../components/studentCard");

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StudentComponent data={dataCompleted.getterData}/>
  </Layout>
)

export default IndexPage