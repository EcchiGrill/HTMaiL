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
          <div key={email.id} className={styles.letter}>
            <div className={styles.date}>
              {email.id} {email.date}
            </div>
            <div className={styles.receiver}>{email.receiver}</div>
            <div className={styles.subject}>{email.subject}</div>
            <p className={styles.text}>{parse(email.text)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EmailHistory;
