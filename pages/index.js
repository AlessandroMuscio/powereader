import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  console.log(text);
  const [isBionic, setIsBionic] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Poweread</title>
        <meta
          name="description"
          content="A text formatter for easier text reading"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ marginBottom: 40 }}>
          <b>POW</b>ER <b>U</b>P <b>YO</b>UR <b>READ</b>ING
        </div>
        {!isBionic ? (
          <div
            style={{ width: "80%", display: "flex", flexDirection: "column" }}
          >
            <div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: 90,
                  resize: "vertical",
                }}
              />
            </div>
            <button
              style={{ alignSelf: "center", marginTop: 30 }}
              onClick={() => setIsBionic(true)}
            >
              GO!
            </button>
          </div>
        ) : (
          <div
            style={{ width: "80%" }}
            dangerouslySetInnerHTML={{ __html: bionicText(text) }}
          />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

const bionicText = (text) => {
  // we iterate over each word in the text and make its first half bold
  const words = text.split(" ");
  const bionicWords = words.map((word) => {
    const firstHalf = word.slice(0, word.length / 2);
    const secondHalf = word.slice(word.length / 2);
    return `<b>${firstHalf}</b>${secondHalf}`;
  });
  return `<div>${bionicWords.join(" ")}</div>`;
};
