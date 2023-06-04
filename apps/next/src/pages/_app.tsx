import '@tamagui/core/reset.css';
import type { AppProps } from 'next/app';
import 'raf/polyfill';
import { Row, TamaguiProvider } from 'ui';
import config from 'tamagui.config';
import { PropsWithChildren, useEffect, useState } from 'react';

// include the build-time generated CSS file
if (process.env.NODE_ENV === 'production') {
  require('../../public/tamagui.css');
}

export const Wrapper = ({ children }: PropsWithChildren) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    // simulate a network request
    setTimeout(() => setReady(true), 100);
  }, []);

  if (!isReady) return <p>Initializing...</p>;

  return (
    <>
      <Row />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config} defaultTheme="light" disableInjectCSS>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </TamaguiProvider>
  );
}

export default MyApp;
