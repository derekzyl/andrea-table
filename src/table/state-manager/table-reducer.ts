import { IAction, InitialStateI } from "../interface/interface.table";
import { ActionTableTypesE } from "./table-action-types";

export const TableReducer = (
  state: InitialStateI,
  action: IAction
): InitialStateI => {
  switch (action.type) {
    case ActionTableTypesE.SET_REMOTE_DATA:{ // "SET_REMOTE_DATA":
     
      return { ...state, remoteData: action.payload };
    
    }
    case ActionTableTypesE.SET_BODY_DATA: 
    
    
      {// "SET_BODY_DATA":
        if (state.bodyData == action.payload) {
  
          return { ...state, bodyData: state.bodyData };
}

        return { ...state, bodyData: action.payload };
      
      }
    case ActionTableTypesE.SET_FILTER_LIMIT: {
      // "SET_FILTER_LIMIT":
      return { ...state, filterLimit: action.payload };
    }
    case ActionTableTypesE.SET_FILTER_PAGINATE: {
      // "SET_FILTER_PAGINATE":
      switch (action.payload) {
        case "-1": {
          return state.filterPaginate > 1
            ? { ...state, filterPaginate: state.filterPaginate - 1 }
            : state;
        }
        case "+1": {
          return state.filterPaginate < state.remoteData.length
            ? { ...state, filterPaginate: state.filterPaginate + 1 }
            : state;
        }
      }
      return { ...state, filterPaginate: action.payload };
    }
    case ActionTableTypesE.SET_SELECT_ALL: {
      // "SET_SELECT_ALL":

      return { ...state, selectAll: action.payload };
    }
    case ActionTableTypesE.SET_SELECTED_ITEMS: // "SET_SELECTED_ITEMS":
      return { ...state, selectedItems: action.payload };
    case ActionTableTypesE.SET_FILTER_VALUES: {
      // "SET_FILTER_VALUES":
      let g = action.payload.key;
      if (action.payload.key.startsWith("_"))
        g = action.payload.key.replace("_", "");

      if (g === "date_range") {
        // Handle date range separately
        const today = new Date();
        let startDate = today;

        switch (action.payload.value) {
          case "today":
            startDate = today;
            break;
          case "yesterday":
            startDate.setDate(today.getDate() - 1);
            break;
          case "this_week":
            startDate.setDate(today.getDate() - today.getDay());
            break;
          case "last_week":
            startDate.setDate(today.getDate() - today.getDay() - 7);
            break;
          case "this_month":
            startDate.setDate(1);
            break;
          case "last_month":
            startDate.setMonth(today.getMonth() - 1);
            startDate.setDate(1);
            break;
          case "this_year":
            startDate.setMonth(0, 1);
            break;
          case "last_year":
            startDate.setFullYear(today.getFullYear() - 1, 0, 1);
            break;

          // Add more cases for other date options as needed
          default:
            startDate = today;
            break;
        }
        let formattedStartDate;
        if (action.payload.value !== "All") {
          formattedStartDate = startDate.toISOString().split("T")[0];
          const val = {
            ...state.filterValues,
            gte: formattedStartDate,
            // You may need to set an end date based on your requirement
          };

          return {
            ...state,
            filterValues: val,
          };
        } else {
          const val = {
            ...state.filterValues,
          };
          if (val["gte"]) delete val["gte"];
          return {
            ...state,

            filterValues: val,
          };
        }
      } else if (g === "calendarFilter") {
        //console.log(action.payload.value);
        if (
          action.payload.value["startDate"] !== "All" &&
          action.payload.value["endDate"] !== "All"
        ) {
          const val = {
            ...state.filterValues,
            gte: action.payload.value["startDate"],
            lte: action.payload.value["endDate"],

            // You may need to set an end date based on your requirement
          };

          return {
            ...state,
            filterValues: val,
          };
        } else {
          const val = {
            ...state.filterValues,
          };
          if (val["gte"]) delete val["gte"];
          if (val["lte"]) delete val["lte"];
          return {
            ...state,

            filterValues: val,
          };
        }
      } else {
        // Handle other filters
        const filteredVa =
          action.payload.value === "All" ||
          action.payload.value === "" ||
          action.payload.value === undefined
            ? { ...state.filterValues }
            : {
                ...state.filterValues,
                [g]: action.payload.value,
              };
        if (
          action.payload.value === "All" ||
          action.payload.value === "" ||
          action.payload.value === undefined
        )
          delete filteredVa[g];
        return {
          ...state,
          filterValues: filteredVa,
        };
      }
    }
    case ActionTableTypesE.SET_SORT_CONFIG: {
      // "SET_SORT_CONFIG":

      const { payload } = action;

      // Check if the clicked key is the same as the current sort key
      const order =
        state.sortConfig.key === payload && state.sortConfig.order === "asc"
          ? "desc"
          : "asc";

      // Create a new sort configuration object
      const newSortConfig = {
        key: payload,
        order: order,
      };

      // Sort the data based on the new configuration
      const sortedData = [...state.remoteData].sort((a, b) => {
        const aValue = newSortConfig.key ? a[newSortConfig.key] : "";
        const bValue = newSortConfig.key ? b[newSortConfig.key] : "";

        if (aValue < bValue) {
          return newSortConfig.order === "asc" ? -1 : 1;
        } else if (aValue > bValue) {
          return newSortConfig.order === "asc" ? 1 : -1;
        }

        return 0;
      });

      // Return the new state with updated sort configuration and sorted data
      return { ...state, sortConfig: newSortConfig, bodyData: sortedData };
    }
    case ActionTableTypesE.SET_FILTER_SEARCH: {
      // "SET_FILTER_SEARCH":

      const data = state.remoteData.filter((item) => {
        // Check each key value for a match
        return Object.values(item).some((val) => {
          if (typeof val === "object" && !Array.isArray(val)) {
            return Object.values(val).some((v) => {
              return (
                v &&
                v
                  .toString()
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
              );
            });
          } else if (Array.isArray(val)) {
            return val.some((v) => {
              return (
                v &&
                v
                  .toString()
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
              );
            });
          }

          return (
            val &&
            val.toString().toLowerCase().includes(action.payload.toLowerCase())
          );
        });
      });
      return { ...state, bodyData: data };
    }
    case ActionTableTypesE.SET_COLUMN_VISIBILITY: // "SET_COLUMN_VISIBILITY":
      return {
        ...state,
        columnVisibility: {
          ...state.columnVisibility,
          [action.payload]: !state.columnVisibility[action.payload],
        },
      };
    case ActionTableTypesE.SET_OPEN_FILTER_BOX: // "SET_OPEN_FILTER_BOX":
      return { ...state, openFilterBox: !state.openFilterBox };

    case ActionTableTypesE.SET_CHECK_BOX: {
      const data = state.bodyData.map((item) => ({
        ...item,
        checkBox: action.payload,
      }));


      return {
        ...state,
        bodyData: data,
      
      };
    }
    case ActionTableTypesE.SET_IS_COLUMN_MENU_OPEN: // "SET_IS_COLUMN_MENU_OPEN":
      return { ...state, isColumnMenuOpen: !state.isColumnMenuOpen };
    case ActionTableTypesE.SET_CHECKED_ITEMS: {
      // "SET_CHECKED_ITEMS":
      const data = state.bodyData.map((item, idx) => {
        let x = item;
        if (String(idx) === action.payload) {
        
          delete item.checkBox;
          x = {
            checkBox: item.checkBox === undefined ? true : !item.checkBox,
            ...item,
          };
        } else {
          x = item;
        }
        return x;
      });
      return { ...state, bodyData: data };
    }
    case ActionTableTypesE.SET_LOADING: {
      //set loading
      return { ...state, loading: action.payload };
    }
    case ActionTableTypesE.SET_COLOR: {
      return { ...state, style: {...state.style,...action.payload} };
    }
    case ActionTableTypesE.SET_SHOW: {
      return { ...state, show: {...state.show,  ...action.payload} };
    }
    default:
      return state;
  }
};
