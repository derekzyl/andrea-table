import { useContext } from "react";
import { TableContext } from "../state-manager/table-context";

export const useTableContext = () => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("useYourContext must be used within a YourContextProvider");
  }
  return context;
};
