import type { NormalizedCacheObject } from '@apollo/client/core';

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

import { locationVar } from './router';

const uri =
  'http://localhost:4000/graphql';

export const link = new HttpLink({ uri, credentials: 'include' });

const cache =
  new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          location(): Location {
            return locationVar();
          },
        },
      },
    }
  });

export const client =
  new ApolloClient({ cache, link });

declare global {
  interface Window {
    __APOLLO_CLIENT__?: ApolloClient<NormalizedCacheObject>;
  }
}
