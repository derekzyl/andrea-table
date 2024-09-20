import { ActionTableTypesE } from "../state-manager/table-action-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type HeadingT = {
  name: string;
  key: string;
  can_sort: boolean;
  is_header: boolean;
  can_filter: boolean;
  can_copy?: boolean;
  isSearchFilter?: boolean;
  filters?: string[];
};

export interface IncomingTableDataI {
  table_name: string;
  base_url: string;
  sub_url: string;
  heading: HeadingT[];
  column?: columnT[];
  query: {
    pageName?: string;
    limitName?: string;
  };
  color?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  },
  refresh?: {
    status: boolean;
    intervalInSec: number;
  };
  fn: {
    fetch_fn: (url: string, base_url: string) => Promise<any>;
    add_fn?: () => void;
    goto_fn?: () => any;
    custom_fn?: () => void;

  };
  buttonName?: {
    customButton?: string;
  },
  show: {
    filters?: boolean;
    pagination?: boolean;
    search?: boolean;
    select?: boolean;
    sort?: boolean;
    table?: boolean;
    exports?: boolean;
    addButton?: boolean;
    checkBox?: boolean;
    customButton?: boolean;
    seeMore?: boolean;

    tableName?: boolean;
  };
  crud: {
    add?: boolean;
    edit?: boolean;
    custom?: boolean;
    delete?: boolean;
    view?: boolean;
    export?: boolean;
  };
}

export type columnT = Record<string, JSX.Element>;

export type IncomingTableDataT = IncomingTableDataI;

export type FetchOptions = {
  method: string;
  mode?: string;
  cache?: string;
  credentials?: string;
  headers?: Record<string, string>;
  redirect?: string;
  referrerPolicy?: string;
  body?: string;
};

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

// state management
export interface InitialStateI {
  remoteData: Array<Record<string, any>>; // Replace `any` with the actual data type of the remote data
  bodyData: Array<Record<string, any>>; // Replace `any` with the actual data type of the body data
  filterLimit: number;
  filterPaginate: number;
  selectAll: boolean;
  selectedItems: Array<string>; // Replace `any` with the actual data type of the selected items
  filterValues: { [key: string]: string } | Record<string, any>; // Replace `any` with the actual value type for each filter
  sortConfig:
    | {
        key: string;
        order: "asc" | "desc";
      }
    | Record<string, any>;

  columnVisibility: Record<string, boolean>; // `key` is the column name, `value` is whether it's visible
  openFilterBox: boolean;
  isColumnMenuOpen: boolean;
  loading: boolean;
  color: { primary: string;  secondary:string, tertiary:string };

}
export interface IAction {
  type: ActionTableTypesE;
  payload: any;
}
