import { useReducer } from "react";
import { TableContext, useContextI } from "../state-manager/table-context";
import { TableReducer } from "../state-manager/table-reducer";
import { initialState } from "../state-manager/table-state";

// Create a custom hook for using the context

// You can also define a helper function to create the provider
export const TableContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(TableReducer, initialState);

  const contextValue: useContextI = {
    state,
    dispatch,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};
