# Project Title: **Andrea table**

## Overview

This project is a reusable and customizable table component built for React applications. It provides advanced features such as sorting, filtering, pagination, CRUD operations, and remote data fetching. This component is designed to be flexible, scalable, and easily integrable into any React project.

## Features

- **Remote Data Fetching**: Fetch table data from a remote server using a custom fetch function.
- **Sorting**: Columns can be sorted both ascending and descending.
- **Filtering**: Supports multiple types of filters, including text search, boolean, and calendar-based filters.
- **Pagination**: Limit and paginate the data displayed in the table.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations directly from the table.
- **Customization**:
  - Dynamic table headings and column visibility.
  - Customizable table button names and colors.
  - Control over which features to display (e.g., filters, sorting, pagination, buttons).
- **State Management**: Includes built-in state management for remote data, body data, filters, sorting configuration, and more.

## Installation

Install the project dependencies:

```bash
npm install
```

## Usage

### Table Component Example

#### Setup File

```typescript



import { columnT, HeadingT, IncomingTableDataI, IncomingTableDataT } from "../../../table/interface/interface.table";


const Address: React.FC<{
  variableFromTable: any;
  crud: IncomingTableDataT["crud"];
}> = ({ variableFromTable }) => {

  const address = variableFromTable.address

  
  return (
    <>
      <div>
 
        <div>Address: {address.address}</div>
        <div>City: {address.city}</div>
        <div>State: {address.state}</div>
        <div>Postal Code: {address.postalCode}</div>
        <div>Country: {address.country}</div>
     
      </div>
    </>
  );
};

const ActionHeader: React.FC<{
  variableFromTable: any;
  crud: IncomingTableDataT["crud"];
  onDeleteSuccess?: () => void;
}> = ({ variableFromTable, onDeleteSuccess }) => {
  console.log({variableFromTable, onDeleteSuccess})


 

  const handleClick = () => {};
  const handleDelete = async (id: string) => {
 
  };

  return (
    <div className="">
      {

      }
      <div
        onClick={() => {
          handleClick();
          /*   dispatch(hideMiniLayout()); */
        }}
        className="btn-primary h-[5px] p-[6px] text-[14px]"
        // to={`/user/${variableFromTable.id}/edit`}
      >
        edit
      </div>
      <div
        onClick={() => {
          handleClick();
          /*      dispatch(hideMiniLayout()); */
        }}
        className="btn-secondary m-2 p-[6px] text-[14px]"
        // to={`/user/${variableFromTable.id}/view`}
      >
        view
      </div>
      <button
        className="btn-tertiary"
        onClick={() => {
          handleDelete("")

        }}
      >
        delete
      </button>
    </div>
  );
};
async function fetchData(url: string, baseUrl: string) {


  try {
    const c =await  fetch(baseUrl+url);
    // const c = axiosInstance;

    const response =await c.json();
    console.log({response})

    return response.users;


  } catch (error) {
    //console.log(error);
  }
}
const extraColumn: columnT[] = [
  {
    _address: <Address variableFromTable={""} crud={{}} />,
    action: <ActionHeader variableFromTable={""} crud={{}} />,
  },
];
const header: HeadingT[] = [
  {
    key: "id",
    name: "id",
    can_sort: true,
    is_header: true,
    can_filter: false,
    can_copy: true,
  },
  {
    key: "firstName",
    name: "first name",
    can_sort: true,
    is_header: true,
    can_filter: false,
  },
  {
    key: "lastName",
    name: "last name",
    can_sort: true,
    is_header: true,
    can_filter: false,
  },
  {
    key: "email",
    name: "email",
    can_sort: true,
    is_header: true,
    can_copy: true,
    can_filter: true,

  },
  {
    key: "_address",
    name: "address",
    can_filter: true,
    can_sort: true,
    is_header: true,
    filters: ["true", "false"],
    isSearchFilter: true,
  },

  {
    key: "calendarFilter",
    name: "calendar",
    can_sort: false,
    is_header: false,
    can_filter: true,
  },
  {
    key: "action",
    name: "action",
    can_sort: false,
    is_header: true,
    can_filter: false,
  },
];

export const userTableData: IncomingTableDataI = {
  base_url: "https://dummyjson.com",
  fn: {
    fetch_fn: fetchData,
  },
  crud: {},
  heading: header,
  column: extraColumn,
  query: {pageName:"skip"},
  show: { seeMore: true, tableName:true, customButton:true },
  refresh: { intervalInSec: 100, status: false },
  sub_url: "/users",
  table_name: "user",
  color: { primary: "red", secondary: "black", tertiary: "green" },
};


```

#### Calling the setup file

```typescript
import React from 'react';
import { userTableData } from './path-to-your-data';

const App = () => {
  return (
    <div>
      <TableComponent tableData={userTableData} />
    </div>
  );
};

export default App;
```

### Incoming Data Structure

#### `HeadingT` - Table Heading

```typescript
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
```

#### `IncomingTableDataI` - Table Data Interface

```typescript
export interface IncomingTableDataI {
  table_name: string;
  base_url: string;
  sub_url: string;
  heading: HeadingT[];
  column?: columnT[];
  query: { pageName?: string; limitName?: string };
  color?: { primary?: string; secondary?: string; tertiary?: string };
  refresh?: { status: boolean; intervalInSec: number };
  fn: {
    fetch_fn: (url: string, base_url: string) => Promise<any>;
    add_fn?: () => void;
    goto_fn?: () => any;
    custom_fn?: () => void;
  };
  buttonName?: { customButton?: string };
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
```

### CRUD Operations

This table supports creating, editing, viewing, and deleting records. You can customize how these actions are handled using the `crud` object within the table data.

```typescript
const crud = {
  add: true,
  edit: true,
  delete: true,
  view: true,
};
```

### Example Data Fetching Function

```typescript
async function fetchData(url: string, baseUrl: string) {
  const response = await fetch(`${baseUrl}${url}`);
  const data = await response.json();
  return data;
}
```

### Custom Button and Additional Features

You can add custom buttons to the table and define other actions like "See More" or "Custom Button" through the `show` object:

```typescript
show: { seeMore: true, customButton: true, addButton: true, pagination: true },
```

## State Management

The table comes with built-in state management for handling data, filters, and UI components. The state includes:

- **remoteData**: Data fetched from a remote source.
- **bodyData**: Local data used in the body of the table.
- **filterValues**: Active filters applied to the table.
- **sortConfig**: Sorting configuration for the columns.
- **columnVisibility**: Visibility state for each column.
- **loading**: Loading state to indicate when data is being fetched.

## Customization Options

The component can be easily customized by providing your own styles, color scheme, or functionality through props.

## License

This project is licensed under the MIT License.
