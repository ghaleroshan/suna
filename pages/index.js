import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SUNA</title>
        <link rel="icon" href="/suna-logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/suna-logo.png" alt="Suna Logo" className={styles.logo} />
        <img src="/images/profile.jpg" alt="profile pic" />
      </main>
    </div>
  );
}
