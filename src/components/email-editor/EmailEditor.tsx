import styles from "./EmailEditor.module.scss";
import { Bold, Italic, Trash2, Underline } from "lucide-react";
import EmailPreview from "./email-preview/EmailPreview.";
import { emailService } from "../../services/email.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEditor } from "../../hooks/useEditor";

function EmailEditor() {
  //TODO Add keybindings to bold | italic | underline

  const {
    applyTextFormat,
    timemark,
    receiver,
    setReceiver,
    subject,
    setSubject,
    text,
    setText,
    textRef,
    count,
  } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () =>
      emailService.sendEmail({
        date: timemark,
        receiver: receiver,
        subject: subject,
        text: text,
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["email history"] });
      setText("");
      setReceiver("");
      setSubject("");
    },
  });

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
              onKeyUp={(e) => {
                console.log(e.nativeEvent);
              }}
            />
            <div className={styles.counter}>{count}</div>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.tools}>
            <button
              onClick={() => {
                setText("");
              }}
            >
              <Trash2 />
            </button>
            <button onClick={() => applyTextFormat("bold")}>
              <Bold />
            </button>
            <button>
              <Italic onClick={() => applyTextFormat("italic")} />
            </button>
            <button>
              <Underline onClick={() => applyTextFormat("underline")} />
            </button>
          </div>
          <button
            className={styles.send}
            disabled={isPending}
            onClick={() => {
              return receiver.length && subject.length
                ? mutate()
                : alert("Fill all the inputs");
            }}
          >
            Send Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
