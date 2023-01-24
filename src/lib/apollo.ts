import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5lw8men4l8r01ta1cqx9t8n/master', 
    cache: new InMemoryCache()
})