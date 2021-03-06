import { createSlice } from "@reduxjs/toolkit";
import { FailureAction } from "../types/actions/failureAction";
import { FetchMessagesAction } from "../types/actions/fetchMessagesAction";
import { GetMessagesSuccessAction } from "../types/actions/getMessagesSuccessAction";
import { SetCurrentRespondentAction } from "../types/actions/setCurrentRespondentAction";
import { SetMessageAction } from "../types/actions/setMessageAction";
import { RespondentState } from "../types/state/respondentState";

const initialState: RespondentState = {
  currentRespondent: null,
  messages: {},
  isSubmitting: false,
  isLoading: true,
  backendErrors: null
}

const respondentSlice = createSlice({
  name: 'respondent',
  initialState,
  reducers: {
    setCurrentRespondent: (state: RespondentState, action: SetCurrentRespondentAction): void => {
      state.currentRespondent = action.payload;
    },
    fetchMessages: (state: RespondentState, action: FetchMessagesAction): void => { // eslint-disable-line
      // do nothing
    },
    getMessages: (state: RespondentState): void => {
      state.isLoading = true;
    },
    getMessagesSuccess: (state: RespondentState, action: GetMessagesSuccessAction): void => {
      state.isLoading = false;
      state.messages[action.payload.from] = action.payload.messages.reverse();
    },
    getMessagesFailure: (state: RespondentState, action: FailureAction): void => {
      state.isLoading = false;
      state.backendErrors = action.payload;
    },
    setMessage: (state: RespondentState, action: SetMessageAction): void => {
      const respondent = Object.keys(state.messages).find(key => key === action.payload.addresseeInState);
      if (respondent) {
        state.messages[respondent].unshift(action.payload.message);
      }
    },
    clearState: (): RespondentState => {
      return initialState;
    }
  }
});

export default respondentSlice.reducer;
export const { setCurrentRespondent, fetchMessages, getMessages,
  getMessagesSuccess, getMessagesFailure, clearState, setMessage } = respondentSlice.actions;