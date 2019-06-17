import React from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log('data', data)
  //console.log(data)
  //const post = data.markdownRemark allJsonplaceholderapiPosts
  return (
    <div>Hello blog post</div>
  )
}

export const query = graphql`
  query($slug: String!) {
    allJsonplaceholderapiPosts(
      filter: {
        fields: { 
          slug: { eq: $slug }
        }
      }
    ) {
      edges {
        node {
          title
        }
      }
    } 
  }
`
