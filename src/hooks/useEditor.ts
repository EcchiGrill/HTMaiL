import { applyStyle } from "../components/email-editor/apply-style";
import { useRef, useState } from "react";
import { TStyle } from "../../types";

const DATE = new Date().toLocaleDateString();
const TIME = new Date().toLocaleTimeString([], { timeStyle: "short" });

export const useEditor = () => {
  const [receiver, setReceiver] = useState("");

  const [subject, setSubject] = useState("");

  const [text, setText] = useState("");

  const timemark = TIME + " " + DATE;

  const count = text.length;

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const applyTextFormat = (type: TStyle) => {
    if (!textRef.current) return;
    const startIndex = textRef.current?.selectionStart;
    const endIndex = textRef.current?.selectionEnd;

    const before = text.substring(0, startIndex);
    const after = text.substring(endIndex);
    const selectedText = text.substring(startIndex, endIndex);
    const formattedText = applyStyle(type, selectedText);

    if (!selectedText.length) return;

    const fullText = before + formattedText + after;

    setText(fullText);
  };

  return {
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
  };
};
