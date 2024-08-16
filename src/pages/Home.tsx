import EmailEditor from "../components/email-editor/EmailEditor";
import EmailHistory from "../components/email-history/EmailHistory";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <div className={styles.logo}>
        <img src="/logo.png" alt="" width={"500px"} />
      </div>
      <div className={styles.container}>
        <EmailEditor />
        <EmailHistory />
      </div>
    </>
  );
}

export default Home;
