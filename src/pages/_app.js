function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>The Bold Developers</title>
      <div className="content-container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
