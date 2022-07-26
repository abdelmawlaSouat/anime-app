import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.ANILIST_GRAPHQL_URI,
  cache: new InMemoryCache(),
});
