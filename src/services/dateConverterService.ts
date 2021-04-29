import { CurrentUser } from "../types/currentUser";

export const dateConverter = (user: CurrentUser): string | void => {
  const createdAt = user.createdAt;
  const monthName: { [key: string]: string } = {
    "01": "січня",
    "02": "дютого",
    "03": "березня",
    "04": "квітня",
    "05": "травня",
    "06": "червня",
    "07": "липня",
    "08": "серпня",
    "09": "вересня",
    "10": "жовтня",
    "11": "листопада",
    "12": "грудня"
  }

  if (createdAt !== undefined) {
    return `${monthName[createdAt.substring(5,7)]} ${createdAt?.substring(0,4)}`;
  }
}

