import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
query (
    $slug: String
){
 markdownRemark (
   fields: {
   slug: {
     eq: $slug
   }
 }
 ){
   frontmatter{
     team
     player1
     player2
     player3
   }
   html
 }
}

`

const Team = (props) => {


   
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.team}</h1>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Team