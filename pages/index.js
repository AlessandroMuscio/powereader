import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { bionicText } from "../library/textTransform";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 50,
            paddingRight: 50,
          }}
        >
          <div
            style={{
              width: "45%",
              padding: 10,
              textAlign: "justify",
              fontSize: 20,
            }}
          >
            {text}
            <br />
            <br />
            {two}
          </div>
          <div
            style={{
              width: "45%",
              padding: 10,
              textAlign: "justify",
              fontSize: 20,
            }}
            dangerouslySetInnerHTML={{
              __html: `${bionicText(text)}</br>${bionicText(two)}`,
            }}
          />
        </div>
        <Link passHref href="/transform">
          <a
            style={{
              fontSize: 30,
              marginTop: 40,
              border: "1px solid black",
              padding: 10,
            }}
            href="replace"
          >
            TRY IT NOW
          </a>
        </Link>
      </main>
    </div>
  );
}
