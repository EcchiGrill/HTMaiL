export interface IEmail {
  receiver: string;
  subject: string;
  text: string;
  date: string;
}

export type TStyle =
  | "bold"
  | "italic"
  | "underline"
  | "heading"
  | "heading2"
  | "heading3"
  | "paragraph"
  | "list"
  | "line"
  | "enter";
