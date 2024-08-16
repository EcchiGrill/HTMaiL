import parse from "html-react-parser";
import { applyStyle, TStyle } from "../components/email-editor/apply-style";
import { useRef, useState } from "react";

export const useEditor = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit. Praesentium repudiandae eligendi sed ratione a nostrum, nulla perspiciatis fugit laborum incidunt!"
  );

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

  console.log(parse(text));

  return { applyTextFormat, text, setText, textRef, count };
};
