import styles from "./EmailEditor.module.scss";
import { Bold, Italic, Trash2, Underline } from "lucide-react";

import EmailPreview from "./email-preview/EmailPreview.";

import { emailService } from "../../services/email.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEditor } from "../../hooks/useEditor";

function EmailEditor() {
  const { applyTextFormat, text, setText, textRef, count } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["email history"] });
      setText("");
    },
  });

  return (
    <div className={styles.container}>
      <EmailPreview text={text} />
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.receiver}>
            <input type="text" placeholder="Receiver" />
          </div>
          <div className={styles.subject}>
            <input type="text" placeholder="Subject" />
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
              mutate();
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
