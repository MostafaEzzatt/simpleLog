import { toPlainText } from "@portabletext/react";

const getEstimatedReadingTime = (words) => {
  const calc = Math.round(toPlainText(words).split(" ").length / 200);
  return calc > 0 ? calc : 1;
};

export default getEstimatedReadingTime;
