import { TStyle } from "../../types";

export const applyStyle = (
  type: TStyle,
  before: string,
  after: string,
  selectedString: string
) => {
  let styledText = selectedString;
  const trimmedSelected = selectedString.trim();

  switch (type) {
    case "bold":
      if (
        trimmedSelected.startsWith("<b>") &&
        trimmedSelected.endsWith("</b>")
      ) {
        styledText = selectedString.replace("<b>", "").replace("</b>", "");
      } else {
        styledText = `<b>${selectedString}</b>`;
      }
      break;

    case "italic":
      if (
        trimmedSelected.startsWith("<i>") &&
        trimmedSelected.endsWith("</i>")
      ) {
        styledText = selectedString.replace("<i>", "").replace("</i>", "");
      } else {
        styledText = `<i>${selectedString}</i>`;
      }
      break;

    case "underline":
      if (
        trimmedSelected.startsWith("<u>") &&
        trimmedSelected.endsWith("</u>")
      ) {
        styledText = selectedString.replace("<u>", "").replace("</u>", "");
      } else {
        styledText = `<u>${selectedString}</u>`;
      }
      break;

    case "heading":
      if (
        trimmedSelected.startsWith("<h1>") &&
        trimmedSelected.endsWith("</h1>")
      ) {
        styledText = selectedString.replace("<h1>", "").replace("</h1>", "");
      } else {
        styledText = `<h1>${selectedString}</h1>`;
      }
      break;

    case "heading2":
      if (
        trimmedSelected.startsWith("<h2>") &&
        trimmedSelected.endsWith("</h2>")
      ) {
        styledText = selectedString.replace("<h2>", "").replace("</h2>", "");
      } else {
        styledText = `<h2>${selectedString}</h2>`;
      }
      break;

    case "heading3":
      if (
        trimmedSelected.startsWith("<h3>") &&
        trimmedSelected.endsWith("</h3>")
      ) {
        styledText = selectedString.replace("<h3>", "").replace("</h3>", "");
      } else {
        styledText = `<h3>${selectedString}</h3>`;
      }
      break;

    case "paragraph":
      if (
        trimmedSelected.startsWith("<p>") &&
        trimmedSelected.endsWith("</p>")
      ) {
        styledText = selectedString.replace("<p>", "").replace("</p>", "");
      } else {
        styledText = `<p>${selectedString}</p>`;
      }
      break;

    case "list":
      if (
        trimmedSelected.startsWith("<li>") &&
        trimmedSelected.endsWith("</li>")
      ) {
        styledText = selectedString.replace("<li>", "").replace("</li>", "");
      } else {
        styledText = `<li>${selectedString}</li>`;
      }
      break;

    case "line":
      return (styledText = `${before}<hr>`);

    case "enter":
      return (styledText = `${before}<br>`);

    default:
      styledText = selectedString;
  }

  const fullText = before + styledText + after;

  return fullText;
};
