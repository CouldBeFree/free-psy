import { MessageInterface } from "../messageInterface";

export interface SetMessageAction {
  type: string;
  payload: {
    addresseeInState: string;
    message: MessageInterface
  };
}