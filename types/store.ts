export interface globalState {
  selected: string;
}

export interface ActionType {
  type: ActionsList;
  payload: string;
}

export enum ActionsList {
  "pixel_selected" = "pixel_selected",
}

export type Observer = HTMLElement & { render: () => void };
