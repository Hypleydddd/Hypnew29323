// Add Apollo Client to this file 
import { ApolloClient, InMemoryCache, inMemoryCache } from "@apollo/client";

//fetching graphql
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  cache: new InMemoryCache(),
})