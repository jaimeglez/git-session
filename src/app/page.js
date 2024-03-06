import styles from "./page-bk.module.css";

export default function Index() {
  return (
    <main className={styles.main}>
      <h1>Git session</h1>

      <footer>
        By{" "}
        <a
          href="https://github.com/jaimeglez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jaime Gonzalez
        </a>
        {" "}and{" "}
      </footer>
    </main>
  );
}
