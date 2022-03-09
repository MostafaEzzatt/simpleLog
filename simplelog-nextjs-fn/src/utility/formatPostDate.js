import { format } from "date-fns";

const formatPostDate = (date) => {
  const formatInput = new Date(date);
  const formattedDate = format(formatInput, "MMMM dd, yyyy");
  return formattedDate;
};

export default formatPostDate;
