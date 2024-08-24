import styles from "./EmailButtons.module.scss";
import {
  Bold,
  Heading,
  Heading2,
  Heading3,
  Italic,
  List,
  Minus,
  Pilcrow,
  Trash2,
  Underline,
} from "lucide-react";
import { emailService } from "../../../services/email.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function EmailButtons({
  text,
  setText,
  receiver,
  setReceiver,
  subject,
  setSubject,
  timemark,
  applyTextStyle,
}: {
  text: string;
  receiver: string;
  subject: string;
  timemark: string;
  setText: CallableFunction;
  setReceiver: CallableFunction;
  setSubject: CallableFunction;
  applyTextStyle: CallableFunction;
}) {
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
      <div className={styles.options}>
        <button
          className={styles.trash}
          onClick={() => {
            setText("");
          }}
        >
          <Trash2 />
        </button>
        <div className={styles.tools}>
          <div className={styles.bold}>
            <button>
              <Bold onClick={() => applyTextStyle("bold")} />
            </button>
            <div className={styles.panel}>
              <button>
                <Italic onClick={() => applyTextStyle("italic")} />
              </button>
              <button>
                <Underline onClick={() => applyTextStyle("underline")} />
              </button>
            </div>
          </div>
          <div className={styles.heading}>
            <button>
              <Heading onClick={() => applyTextStyle("heading")} />
            </button>
            <div className={styles.panel}>
              <button>
                <Heading3 onClick={() => applyTextStyle("heading3")} />
              </button>
              <button>
                <Heading2 onClick={() => applyTextStyle("heading2")} />
              </button>
            </div>
          </div>
          <div className={styles.paragraph}>
            <button>
              <Pilcrow onClick={() => applyTextStyle("paragraph")} />
            </button>
            <div className={styles.panel}>
              <button>
                <List onClick={() => applyTextStyle("list")} />
              </button>
            </div>
          </div>
          <button>
            <Minus onClick={() => applyTextStyle("line")} />
          </button>
        </div>
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
  );
}

export default EmailButtons;
