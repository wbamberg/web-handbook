import { getCompatInfo } from "./compat-info.js";

export function createPropertyPageData(name, sourceData) {
  return {
    name,
    summary: sourceData["summary"],
    "interactive-example": sourceData["interactive-example"],
    "syntax-example": sourceData["syntax-example"],
    "constituent-properties": sourceData["constituent-properties"],
    compat: getCompatInfo(sourceData["browser-compatibility"]),
    status: sourceData["status"],
    "see-also": sourceData["see-also"],
  };
}
