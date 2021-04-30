import { MessageInterface } from "../messageInterface";

export interface GetMessagesSuccessAction {
  type: string;
  payload: {
    from: string;
    messages: MessageInterface[];
  };
}