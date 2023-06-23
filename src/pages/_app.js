import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <title>The Bold Developers</title>
      <div className="content-container">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;