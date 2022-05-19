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
                style={{
                  width: "100%",
                  minHeight: 90,
                  resize: "vertical",
                }}
              />
            </div>
            <button
              onClick={() => setIsBionic(true)}
              style={{
                fontSize: 30,
                marginTop: 40,
                border: "1px solid black",
                padding: 10,
              }}
              href="replace"
            >
              GO
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{ width: "80%" }}
              dangerouslySetInnerHTML={{ __html: bionicText(text) }}
            />
            <button
              style={{
                fontSize: 30,
                marginTop: 40,
                border: "1px solid black",
                padding: 10,
              }}
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
