import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AllTeamsPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp{
        edges{
          node{
            fluid{
              ...GatsbyImageSharpFluid
            
            }
              
            
          }
        }
      }
    
      
  
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            team
          }
          fields{
            slug
          }
        }
      }
    }
  }
`)

return (
  <Layout>
    <SEO title="Rocket Leage Teams Page" />
    <h1>Rocket League Teams</h1>
    {data.allMarkdownRemark.edges.map((edge) => {
      return(
        <h3><Link to={`/teams/${edge.node.fields.slug}`}>{edge.node.frontmatter.team}</Link></h3>
      )
    
    })}

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      {data.allImageSharp.edges.map((edge) => {
        return (
        <Img fluid={edge.node.fluid}/>
        )
      })}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)
  

  
}

export default AllTeamsPage
