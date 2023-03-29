import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/test-data';
import { client } from "../lib/apollo";
import { gql } from "@apollo/client"
import Search from '../components/Footer';



export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
          Hypley
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      <Search></Search>
        <div className="grid">
          {
            posts.map((post) => {
              return (
                <PostCard key={post.uri} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

//pass data into posts component in function above.
export async function getStaticProps(){

  const GET_LISTINGS = gql`
  query GetAllListings {
    listings {
      nodes {
        title
        content
        uri
        date
        slug
        author {
          node {
            name
          }
        }
      }
    }
  }
  `
  const response = await client.query({
    query: GET_LISTINGS
  })
  const posts = response?.data?.listings?.nodes
  return {
    props: {
      posts
    }
  }
}
