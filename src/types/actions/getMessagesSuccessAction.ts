import { MessageInterface } from "../messageInterface";

export interface GetMessagesSuccessAction {
  type: string;
  payload: MessageInterface[];
}