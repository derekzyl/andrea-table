import { ActionTableTypesE } from "../state-manager/table-action-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The type `HeadingT` defines properties for a table heading, including name, key, sorting capability,
 * header status, filtering capability, optional copying capability, search filtering status, and
 * filter options.
 * @property {string} name - The `name` property in the `HeadingT` type represents the display name of
 * the heading. It is a string type.
 * @property {string} key - The `key` property in the `HeadingT` type represents a unique identifier
 * for the heading. It is typically used to identify the heading when working with collections or
 * tables of data.
 * @property {boolean} canSort - The `canSort` property in the `HeadingT` type indicates whether the
 * heading can be used for sorting purposes. If `canSort` is set to `true`, it means that the heading
 * can be used as a sorting option. If it is set to `false`, the heading cannot be
 * @property {boolean} isHeader - The `isHeader` property in the `HeadingT` type indicates whether the
 * item is a header or not. It is a boolean value that specifies if the item is a header in a table or
 * a similar structure.
 * @property {boolean} canFilter - The `canFilter` property in the `HeadingT` type indicates whether
 * the column can be filtered or not. If `canFilter` is set to `true`, it means that filtering
 * functionality is available for that particular column.
 * @property {boolean} canCopy - The `canCopy` property in the `HeadingT` type indicates whether the
 * heading can be copied. It is an optional property, meaning it may or may not be present in an object
 * of type `HeadingT`.
 * @property {boolean} isSearchFilter - The property `isSearchFilter` is a boolean flag that indicates
 * whether the heading can be used as a search filter. If it is set to `true`, it means that this
 * particular heading can be used for searching/filtering data in the dataset.
 * @property {string[]} filters - The `filters` property in the `HeadingT` type is an optional array of
 * strings. It is used to store the possible filter options for a specific heading.
 */
export type HeadingT = {
  name: string;
  key: string;
  canSort?: boolean;// set to default false
 isHeader?: boolean;  // set to default true
  canFilter: boolean;
  canCopy?: boolean;
  isSearchFilter?: boolean;
  filters?: string [] | { [key:string]:string}[];
};

/* The `export interface IncomingTableDataI {` statement is defining an interface named
`IncomingTableDataI`. This interface specifies the structure of an object that typically represents
incoming data for a table component. It includes properties such as `tableName`, `baseUrl`,
`subUrl`, `heading`, `column`, `query`, `color`, `refresh`, `fn`, `buttonName`, `show`, `crud`,
which define various aspects of the table configuration and behavior. */
export interface IncomingTableDataI<T> {
  tableName: string;
  baseUrl: string;
  subUrl: string;
  heading: HeadingT[];
  column?: ColumnT<T>[];
  query: {
    pageName?: string;
    limitName?: string;
  };
  color?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    background?: string;
    cellBackground?: string;
    filterBackground?: string;
    exportBackground?: string;
 

  };
  refresh?: {
    status: boolean;
    intervalInSec: number;
  };
  /* The `fn` property in the `IncomingTableDataI` interface is defining an object that contains
  various functions related to table behavior. It includes the following properties: */
  fn: {
    fetchFn: ({baseUrl, url}:{url: string, baseUrl: string}) => Promise<any>;
    addFn?: () => void;
    gotoFn?: () => any;
    customFn?: () => void;

  };
  buttonName?: {
    customButton?: string;
  },
  /* The `show` property within the `IncomingTableDataI` interface is defining an object that specifies
  various display options for the table component. It includes boolean properties that control the
  visibility of different elements within the table, such as filters, pagination, search bar,
  selection checkboxes, sorting options, table itself, exports button, add button, custom button,
  see more button, and the table name. Each boolean property indicates whether the corresponding
  element should be displayed or not in the table interface based on its value (true or false). */
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

// export type columnT = Record<string, JSX.Element>;

export type ColumnRenderer<T> = (columnData: T) => JSX.Element;

export type ColumnT<T> = Record<string, ColumnRenderer<T>>;



export type IncomingTableDataT<T> = IncomingTableDataI<T>;

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
  color:  {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    cellBackground: string;

    filterBackground: string;
    exportBackground: string;
  };

}
export interface IAction {
  type: ActionTableTypesE;
  payload: any;
}

