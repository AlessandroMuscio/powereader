import Head from "next/head";
import { useState } from "react";
import { bionicText } from "../library/textTransform";
import styles from "../styles/Home.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const bodyExample = `
{
    text: "required text to parse"
    type: "html"
}
`;

const outExample = `
{
    "out" : "<div><b>requ</b>ired <b>te</b>xt <b>t</b>o <b>pa</b>rse</div>"
}
`;

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

      <main
        className={styles.main}
        style={{ paddingLeft: "30rem", paddingRight: "30rem" }}
      >
        <div style={{ alignSelf: "start" }}>
          This website provides one simple API:
        </div>
        <br />
        <div style={{ alignSelf: "start" }}>
          <SyntaxHighlighter language="json" style={docco}>
            [GET] read.thevinter.com/api/transform
          </SyntaxHighlighter>
        </div>

        <br />
        <h4 style={{ alignSelf: "start" }}></h4>
        <div style={{ alignSelf: "start" }}>
          <b>Required Body:</b>
        </div>

        <div style={{ alignSelf: "start" }}>
          <SyntaxHighlighter language="json" style={docco}>
            {bodyExample}
          </SyntaxHighlighter>
        </div>
        <br />
        <br />
        <div style={{ alignSelf: "start" }}>
          The <b>text</b> parameter should contain the string of text you want
          to transform
        </div>
        <br />
        <br />
        <div style={{ alignSelf: "start" }}>
          The <b>type</b> parameter can be either <i>html</i> or <i>md</i> and
          it tells the API which output format you want
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ alignSelf: "start" }}>
          <b>Example Output:</b>
        </div>

        <div style={{ alignSelf: "start" }}>
          <SyntaxHighlighter language="json" style={docco}>
            {outExample}
          </SyntaxHighlighter>
        </div>
      </main>
    </div>
  );
}
