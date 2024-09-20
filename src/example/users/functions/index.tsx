/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { columnT, HeadingT, IncomingTableDataI, IncomingTableDataT } from "../../../table/interface/interface.table";


const Address: React.FC<{
  columnData: any;
  crud: IncomingTableDataT["crud"];
}> = ({ columnData }) => {

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

const ActionHeader: React.FC<{
  columnData: any;
  crud: IncomingTableDataT["crud"];
  onDeleteSuccess?: () => void;
}> = ({ columnData, onDeleteSuccess }) => {
  console.log({columnData, onDeleteSuccess})


 

  const handleClick = () => {};
  const handleDelete = async (id: string) => {
    console.log(id)
   
 
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
    _address: <Address columnData={""} crud={{}} />,
    action: <ActionHeader columnData={""} crud={{}} />,
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
    can_filter: false,

  },
  {
    key: "gender",
    name: "gender",
    can_sort: true,
    is_header: true,
    can_copy: true,
    can_filter: true,
    filters:['male', 'female']

  },
  {
    key: "_address",
    name: "address",
    can_filter: true,
    can_sort: true,
    is_header: true,

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
