import { useEffect, useState } from "react";
import EmailEditor from "../components/email-editor/EmailEditor";
import EmailHistory from "../components/email-history/EmailHistory";
import styles from "./Home.module.scss";

function Home() {
  const [isLoading, setLoading] = useState(true);

  //TODO Improve loading animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="" width={"500px"} />
          </div>
          <div className={styles.wrapper}>
            <EmailEditor />
            <EmailHistory />
          </div>
        </div>
      ) : (
        <div className={styles.loadingLogo}>
          <img src="/logo.png" alt="" />
        </div>
      )}
    </>
  );
}

export default Home;
