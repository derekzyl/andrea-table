import { Dispatch } from "react";
import { IAction } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";

/**
 * The function `handleSort` takes a dispatch function and a key as parameters, and dispatches an
 * action with the type `SET_SORT_CONFIG` and the payload as the key.
 * @param dispatch - The `dispatch` parameter is a function that is used to send actions to the Redux
 * store. It is typically provided by the `useDispatch` hook from the `react-redux` library.
 * @param {string} key - The "key" parameter is a string that represents the sorting configuration. It
 * is used to determine how the data should be sorted.
 */
export const handleSort = (dispatch: Dispatch<IAction>, key: string) => {
  dispatch({ type: ActionTableTypesE.SET_SORT_CONFIG, payload: key });
};
