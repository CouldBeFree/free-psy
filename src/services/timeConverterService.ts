import moment from "moment";

export const timeConverter = (milliseconds: string): string => {
  return moment(parseInt(milliseconds)).fromNow();
}