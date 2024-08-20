import { TStyle } from "../../../types";

export const applyStyle = (type: TStyle, selectedString: string) => {
  let styledText = selectedString;

  const trimmedSelected = selectedString.trim();

  switch (type) {
    case "bold":
      if (
        trimmedSelected.startsWith("<b>") &&
        trimmedSelected.endsWith("</b>")
      ) {
        return selectedString.replace("<b>", "").replace("</b>", "");
      } else {
        styledText = `<b>${selectedString}</b>`;
      }
      break;

    case "italic":
      if (
        trimmedSelected.startsWith("<i>") &&
        trimmedSelected.endsWith("</i>")
      ) {
        return selectedString.replace("<i>", "").replace("</i>", "");
      } else {
        styledText = `<i>${selectedString}</i>`;
      }
      break;

    case "underline":
      if (
        trimmedSelected.startsWith("<u>") &&
        trimmedSelected.endsWith("</u>")
      ) {
        return selectedString.replace("<u>", "").replace("</u>", "");
      } else {
        styledText = `<u>${selectedString}</u>`;
      }
      break;

    default:
      styledText = selectedString;
  }
  return styledText;
};
