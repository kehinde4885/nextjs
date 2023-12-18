import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

//HTML Metadata for site Crawlers and SEO
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
};

//Entry Component into the Next App
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
