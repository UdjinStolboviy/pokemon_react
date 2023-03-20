import { Global } from "@emotion/react";

import { GlobalStyles } from "@/styles/global";

import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from "next/dist/pages/_document";
import { CssBaseline } from "@nextui-org/react";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
