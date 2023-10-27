import { globalState, ActionType, ActionsList } from "../types/store";

export const reducer = (action: ActionType, currentState: globalState) => {
  switch (action.type) {
    case ActionsList.pixel_selected:
      return {
        ...currentState,
        selected: action.payload,
      };
    default:
      return currentState;
  }
};
