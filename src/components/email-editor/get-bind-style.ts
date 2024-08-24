import { KeyboardEvent } from "react";
import { TStyle } from "../../types";

export const getBindStyle = (bindings: object, event: KeyboardEvent) => {
  for (const [key, value] of Object.entries(bindings) as [TStyle, string][]) {
    if (event.ctrlKey && value.includes("ctrl") && value.endsWith(event.key))
      return key;
    if (event.key === "Enter" && value.includes("Enter")) return key;
  }
};
