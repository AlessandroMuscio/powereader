import Head from "next/head";
import styles from "../styles/Home.module.css";

const text = `
  Poweread helps you read faster, better. It's simple: Poweread highlights the start of every word in your sentences, so your eyes can focus on the most 
  important part of what you're reading. You'll absorb information faster, and it'll be easier to understand. Poweread is available on computers and smartphones.
  `;

const two = `Poweread allows you to use your own input and have it transformed into a more understandable format. You can either input your text directly on the website or use the 
provided APIs to build your own application.`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poweread</title>
        <meta
          name="description"
          content="A text formatter for easier reading"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.paragraph} style={{ paddingBottom: 0 }}>
          Poweread does not store any of your data and all your requests are
          handled anonymously.
          <br />
          <br />
          <br />
          The website reserves the right to log the timestamp of every request
          made to the server to ensure that the website is not abused and to
          gauge the popularity of the service
          <br />
          <br />
          <br />
          No Software Warranty. The User acknowledges and agrees that the use of
          the Software is at User’s sole risk. The Software and related
          documentation are provided “AS IS” and without any warranty of any
          kind and Seller{" "}
          <b>
            EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING,
            BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
            FITNESS FOR A PARTICULAR PURPOSE.
          </b>
        </div>
      </main>
    </div>
  );
}
