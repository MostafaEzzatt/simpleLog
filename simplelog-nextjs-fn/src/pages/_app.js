import "../styles/globals.css";

// App Context
import ContextProvider from "../lib/AppContext";

// Layout
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
