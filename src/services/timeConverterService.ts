import moment from "moment";
import 'moment/locale/uk'

export const timeConverter = (milliseconds: string): string => {
  moment.locale('uk')
  return moment(parseInt(milliseconds)).fromNow();
}