import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>My page</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, minimum-scale=1, ' +
              'width=device-width, height=device-height'
            }
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/_next/static/style.css"
          />
          <link
            rel="icon"
            href="/static/images/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="shortcut icon"
            href="/static/images/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
