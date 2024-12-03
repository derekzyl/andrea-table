/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ColumnElementT,
  ColumnT,
  HeadingT,
  IncomingTableDataI,
  IncomingTableDataT,
} from "../../../table/interface/interface.table";

const Address: React.FC<ColumnElementT<any>> = ({ columnData }) => {
  const address = columnData.address;

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
  columnData: any;
  crud: IncomingTableDataT<any>["crud"];
  onDeleteSuccess?: () => void;
}> = () => {
  const handleClick = () => {};
  const handleDelete = async (id: string) => {
    console.log(id);
  };

  return (
    <div className="">
      {}
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
          handleDelete("");
        }}
      >
        delete
      </button>
    </div>
  );
};
async function fetchData({ baseUrl, url }: { url: string; baseUrl: string }) {
  try {
    const c = await fetch(baseUrl + url);
    // const c = axiosInstance;

    const response = await c.json();
    console.log({ response });

    return response.users;
  } catch (error) {
    //console.log(error);
  }
}
const extraColumn: ColumnT<any>[] = [
  {
    _address: <Address columnData={""} crud={{}} />,
    action: <ActionHeader columnData={""} crud={{}} />,
  },
];

function TestHeader({
  handleSort,
  sortState,
}: {
  handleSort: () => void;
  sortState: boolean | undefined;
}) {
  return (
    <div
      onClick={() => {
        handleSort();
      }}
      style={{
        width: "100%",
        background: "red",
        height: "32px",
        display: "flex",
      }}
      className="div"
    >
      hello
      {String(sortState)}
    </div>
  );
}
const header: HeadingT<any>[] = [
  {
    key: "firstName",
    name: "first name",
    canSort: true,
    isHeader: true,
    canFilter: false,
  },
  {
    key: "id",
    name: <TestHeader handleSort={() => {}} sortState={undefined} />,
    canSort: true,
    isHeader: true,
    canFilter: false,
    canCopy: true,
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
    canFilter: false,
  },
  {
    key: "gender",
    name: "gender",
    canSort: true,
    isHeader: true,
    canCopy: true,
    canFilter: true,
    filters: ["male", "female"],
  },
  {
    key: "_address",
    name: "address",
    canFilter: true,
    canSort: true,
    isHeader: true,

    isSearchFilter: true,
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

export const userTableData: IncomingTableDataI<any> = {
  baseUrl: "https://dummyjson.com",
  fn: {
    fetchFn: fetchData,
  },
  crud: {},
  heading: header,
  column: extraColumn,
  query: { pageName: "skip" },
  show: {
    seeMore: false,
    tableName: true,
    customButton: false,
    checkBox: false,
    select: false,
    exports: false,
    deleteButton: false,search:false,
  },
  refresh: { intervalInSec: 120, status: true },
  subUrl: "/users",
  tableName: "user",
  style: {
    primary: "hsl(200, 90%,50%)",
    secondary: "hsl(200,60%,80%)",
    tertiary: "hsl(200,90%,40%)",
    background: "hsl(300,70%,96%)",
    cellBackground: "hsl(300,10%,80%)",
    filterBackground: "hsl(300,10%,80%)",
    exportBackground: "hsl(300,10%,80%)",
    borderSpacing: "1px",
  },
};
