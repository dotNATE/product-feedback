import '../styles/styles.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    headers: {
      authorization: token,
    },
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
