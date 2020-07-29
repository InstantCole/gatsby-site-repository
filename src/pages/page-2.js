import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp{
      edges{
        node{
          fluid(maxWidth: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)

return (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {console.log(data.allImageSharp.edges[1])}
    <div style={{ maxWidth: `50px`, marginBottom: `1.45rem` }}>
    <Img fluid={data.allImageSharp.edges[0].node.fluid}/>
    <Img fluid={data.allImageSharp.edges[1].node.fluid}/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)
  

  
}

export default SecondPage
