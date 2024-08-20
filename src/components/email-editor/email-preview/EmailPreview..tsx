import styles from "./EmailPreview.module.scss";
import parse from "html-react-parser";

//TODO useEffect text border animation trigger
function EmailPreview({ text }: { text: string }) {
  return (
    <div>
      {!text.length ? (
        <>
          <div className={styles.hidden}>
            <div className={styles.hidden_border}></div>
          </div>
          <div className={styles.hidden_text}>Type below...</div>
        </>
      ) : (
        <div className={styles.card}>
          <p>{parse(text)}</p>
        </div>
      )}
    </div>
  );
}

export default EmailPreview;
