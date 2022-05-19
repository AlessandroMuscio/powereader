import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 100,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginBottom: 40,
          fontFamily: "'Playfair Display', serif",
          fontSize: 50,
        }}
      >
        <b>POWE</b>RED <b>READ</b>ING
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 30 }}>
        <Link href="/">About</Link>
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
        <Link href="/transform">Try It</Link>
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
        <Link href="/docs">API</Link>
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
        <Link href="/privacy">Privacy</Link>
      </div>
    </div>
  );
}
