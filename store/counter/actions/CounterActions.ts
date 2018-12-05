import { ActionsUnion, createAction } from "@martin_hotell/rex-tils";
export const INCREMENT = "INCREMENT";

// export type ICounterActions = Action<typeof INCREMENT>;

export const Actions = {
  icrement: () => createAction(INCREMENT),
};

export type Actions = ActionsUnion<typeof Actions>;
