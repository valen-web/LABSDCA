import { globalState, ActionType, ActionsList, Observer } from "../types/store";
import { reducer } from "./reducer";

export let global_state: globalState = {
  selected: "",
};

const observers: Observer[] = [];

export const dispatch = (action: ActionType) => {
  const clone = JSON.parse(JSON.stringify(global_state));
  global_state = reducer(action, clone);
  observers.forEach((o: Observer) => o.render());
};

export const addObserver = (observer: Observer) => {
  observers.push(observer);
};
