import Head from "next/head";
import { useState } from "react";
import { bionicText } from "../library/textTransform";
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
          content="A text formatter for easier reading"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!isBionic ? (
          <div
            style={{ width: "80%", display: "flex", flexDirection: "column" }}
          >
            <div>
              <textarea
                value={text}
                placeholder="Type something here"
                onChange={(e) => setText(e.target.value)}
                className={styles.textInput}
              />
            </div>
            <button
              onClick={() => setIsBionic(true)}
              className={styles.button}
              href="replace"
            >
              GO
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className={styles.paragraph}
              style={{ paddingBottom: 10 }}
              dangerouslySetInnerHTML={{ __html: bionicText(text) }}
            />
            <button
              className={styles.button}
              onClick={() => {
                setIsBionic(false);
                setText("");
              }}
            >
              Go Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
