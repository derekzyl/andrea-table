# Project Title: **Andrea table**

## Overview

This project is a reusable and customizable table component built for React applications. It provides advanced features such as sorting, filtering, pagination, CRUD operations, and remote data fetching. This component is designed to be flexible, scalable, and easily integrable into any React project.
kindly star ⭐ and share my repo on github: [Andrea Table GitHub Repository](https://github.com/derekzyl/andrea-table) .
And if you are very generous and want to appreciate my work [sponsor](#sponsor) or subscribe with github sponsor.

## Table of Contents

1. [Project Title: Andrea Table](#project-title-andrea-table)
2. [Overview](#overview)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
    - [Table Component Example](#table-component-example)
    - [Calling the Setup File](#calling-the-setup-file)
    - [Incoming Data Structure](#incoming-data-structure)
    -[screenshots](#screenshots)
6. [Props](#props)
    - [HeadingT - Table Heading](#headingt---table-heading)
    - [TableDataT - Table Data Interface](#tabledatat---table-data-interface)
7. [CRUD Operations](#crud-operations)
8. [Example Data Fetching Function](#example-data-fetching-function)
9. [Custom Button and Additional Features](#custom-button-and-additional-features)
10. [State Management](#state-management)
11. [Customization Options](#customization-options)
12. [License](#license)

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
npm install andrea-table
```

## Usage

### [Github Repo For Example Usage](https://github.com/derekzyl/andrea-table-test)

### Table Component Example

#### Setup File

```typescript

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ColumnT, ColumnElementT HeadingT, TableDataT, } from "andrea-table";




const Address: React.FC<ColumnElementT<any>> = ({ columnData }) => {

  const address = columnData.address

  
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

const ActionHeader:React.FC<ColumnElementT<any>> =  ({ columnData, onDeleteSuccess }) => {
  console.log({columnData, onDeleteSuccess})


 

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
        // to={`/user/${columnData.id}/edit`}
      >
        edit
      </div>
      <div
        onClick={() => {
          handleClick();
          /*      dispatch(hideMiniLayout()); */
        }}
        className="btn-secondary m-2 p-[6px] text-[14px]"
        // to={`/user/${columnData.id}/view`}
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
async function fetchData({url, baseUrl}:{url: string, baseUrl: string}) {


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
const extraColumn: columnT<any>[] = [
  {
    _address: <Address columnData={""} crud={{}} />,
    action: <ActionHeader columnData={""} crud={{}} />,
  },
];
const header: HeadingT<any>[] = [
  {
    key: "id",
    name: "id",
    canSort: true,
   isHeader: true,
    canFilter: false,
    canCopy: true,
  },
  {
    key: "firstName",
    name: "first name",
    canSort: true,
   isHeader: true,
    canFilter: false,
  },
  {
    key: "lastName",
    name: "last name",
    canSort: true,
   isHeader: true,
    canFilter: false,
  },
  {
    key: "email",
    name: "email",
    canSort: true,
   isHeader: true,
    canCopy: true,
    canFilter: true,

  },
  {
    key: "_address",
    name: "address",
    canFilter: true,
    canSort: true,
   isHeader: true,
    filters: ["true", "false"],
 
  },

  {
    key: "calendarFilter",
    name: "calendar",
    canSort: false,
   isHeader: false,
    canFilter: true,
  },
  {
    key: "action",
    name: "action",
    canSort: false,
   isHeader: true,
    canFilter: false,
  },
];

export const userTableData: TableDataT<any> = {
  baseUrl: "https://dummyjson.com",
  fn: {
    fetchFn: fetchData,
  },
  crud: {},
  heading: header,
  column: extraColumn,
  query: {pageName:"skip"},
  show: { seeMore: true, tableName:true, customButton:true },
  refresh: { intervalInSec: 100, status: false },
  subUrl: "/users",
  tableName: "user",
  color: { primary: "red", secondary: "black", tertiary: "green",background:"black", cellBackground:"black", filterBackground:"black", exportBackground:"black" },

};


```

#### Calling the setup file

```typescript
import { NewTable } from 'andrea-table';


import { userTableData } from "../functions";

export function ViewUsers() {

  userTableData.fn.addFn = () =>"";
  userTableData.show.addButton = true;
  return (
    <>
      {" "}
      <div  className="">

<NewTable data={userTableData} />
      </div>
    </>
  );
}

```

### ScreenShots

- ![Table Screenshot](https://github.com/derekzyl/andrea-table-test/blob/main/src/screenshots/image.png)
- ![Table Screenshot](https://github.com/derekzyl/andrea-table-test/blob/main/src/screenshots/image1.png)
- ![Table Screenshot](https://github.com/derekzyl/andrea-table-test/blob/main/src/screenshots/image2.png)
- ![Table Screenshot](https://github.com/derekzyl/andrea-table-test/blob/main/src/screenshots/image3.png)
- ![Table Screenshot](https://github.com/derekzyl/andrea-table-test/blob/main/src/screenshots/image4.png)

### Incoming Data Structure

## Props

### `HeadingT` - Table Heading

```typescript
export type HeadingT<T> = {
  name: string;
  key:keyof T| string|any;
 isHeader?: boolean; // default is true
  canSort?: boolean;// default is false
  canFilter: boolean;// default is false
  canCopy?: boolean;// default is false

  filters?: string[];// default is false
};
```

### `TableDataT` - Table Data Interface

```typescript
export interface TableDataI<T> {
  tableName: string;
  baseUrl: string;
  subUrl: string;
  heading: HeadingT<T>[];
  column?: columnT<T>[];
  query: { pageName?: string; limitName?: string };
  color?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    background?: string;
    cellBackground?: string;
    filterBackground?: string;
    exportBackground?: string;
 

  };
  refresh?: { status: boolean; intervalInSec: number };
  fn: {
    fetchFn: (url: string, baseUrl: string) => Promise<any>;
    addFn?: () => void;
    gotoFn?: () => any;
    customFn?: () => void;
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

## CRUD Operations

This table supports creating, editing, viewing, and deleting records. You can customize how these actions are handled using the `crud` object within the table data.

```typescript
const crud = {
  add: true,
  edit: true,
  delete: true,
  view: true,
};
```

## Example Data Fetching Function

```typescript
async function fetchData({url: string, baseUrl: string}) {
  const response = await fetch(`${baseUrl}${url}`);
  const data = await response.json();
  return data;
}
```

## Custom Button and Additional Features

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

## Sponsor

- <a href="buymeacoffee.com/cybergenii">Buy me a coffee</a>
- solana address `cSntSgCMytF1wjdGpa2tYt7gpgAxCNNM4QGVN9xjJSo`
- Btc address `18Zne6NrvrvYYM83hKeCqGoBVWeyhfpym1`
