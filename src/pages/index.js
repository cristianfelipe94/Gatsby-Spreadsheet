import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StudentComponent from "../components/studentComponent"

// const dataCompleted = require("../components/studentCard")

const listOfData = [
  {
      name: 'Felipe',
      career: 'Web',
      generation: '2019',
      portfolio: 'Link repo',
      social: 'Insta',
      avatar: 'Link photo'
  },
  {
      name: 'Luis',
      career: 'Post',
      generation: '2016',
      portfolio: 'Link repo',
      social: 'Face',
      avatar: 'Link photo'
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola</h1>
    <StudentComponent data={listOfData}/>
  </Layout>
)

export default IndexPage
