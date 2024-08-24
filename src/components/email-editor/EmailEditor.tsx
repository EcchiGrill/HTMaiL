import styles from "./EmailEditor.module.scss";
import EmailPreview from "./email-preview/EmailPreview.";
import { useEditor } from "../../hooks/useEditor";
import { getBindStyle } from "./get-bind-style";
import bindings from "../../../bindings";
import EmailButtons from "./email-buttons/EmailButtons.";

function EmailEditor() {
  const {
    applyTextStyle,
    receiver,
    setReceiver,
    subject,
    setSubject,
    text,
    setText,
    textRef,
    count,
    timemark,
  } = useEditor();

  return (
    <div className={styles.container}>
      <EmailPreview text={text} />
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.receiver}>
            <input
              type="text"
              placeholder="Receiver"
              onChange={(e) => {
                setReceiver(e.target.value);
              }}
              value={receiver}
            />
          </div>
          <div className={styles.subject}>
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </div>
          <div className={styles.textField}>
            <textarea
              placeholder="Type here..."
              spellCheck="false"
              onChange={(e) => {
                setText(e.target.value);
              }}
              ref={textRef}
              value={text}
              onKeyDown={(e) => {
                const style = getBindStyle(bindings, e);
                applyTextStyle(style!);
              }}
            />
            <div className={styles.counter}>{count}</div>
          </div>
        </div>
        <EmailButtons
          text={text}
          setText={setText}
          receiver={receiver}
          setReceiver={setReceiver}
          subject={subject}
          setSubject={setSubject}
          timemark={timemark}
          applyTextStyle={applyTextStyle}
        />
      </div>
    </div>
  );
}

export default EmailEditor;
