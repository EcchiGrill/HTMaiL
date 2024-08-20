import { useQuery } from "@tanstack/react-query";
import styles from "./EmailHistory.module.scss";
import { emailService } from "../../services/email.service";
import parse from "html-react-parser";

export function EmailHistory() {
  const { data } = useQuery({
    queryKey: ["email history"],
    queryFn: () => emailService.getEmails(),
  });

  return (
    <div className={styles.feed}>
      {data?.map((email) => {
        return (
          <div key={email.text} className={styles.letter}>
            <div className={styles.date}>
              <i>{email.date}</i>
            </div>
            <div className={styles.receiver}>{email.receiver}</div>
            <div className={styles.subject}>
              <b>{email.subject}</b>
            </div>
            <p className={styles.text}>{parse(email.text)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EmailHistory;
