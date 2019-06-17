import React from "react"
import { graphql } from "gatsby"

export default (props) => {
  console.log(props)
  //console.log(data)
  //const post = data.markdownRemark allJsonplaceholderapiPosts
  return (
    <div>Hello blog post</div>
  )
}

/*
export const query = graphql`
  query($slug: String!) {
    allJsonplaceholderapiPosts(fields: { slug: { eq: $slug } }){
      title
      body
    }
  }
`
*/
