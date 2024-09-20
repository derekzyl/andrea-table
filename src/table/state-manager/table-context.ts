import { Dispatch, createContext } from "react";
import { IAction, InitialStateI } from "../interface/interface.table";
export interface useContextI {
  state: InitialStateI;
  dispatch: Dispatch<IAction>;
}
export const TableContext = createContext<useContextI | undefined>(undefined);
