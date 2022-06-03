import { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled';

const Body = styled.body({
  height: '100vh',
  width: '100%',
  backgroundColor: '#F2F4FF',
  margin: 0,
});

export default function Document() {
  return (
    <Html>
      <Head />
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  )
}