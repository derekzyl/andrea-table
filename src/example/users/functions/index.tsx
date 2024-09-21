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
  
 let x = false;
  if (x = true) {
    
    console.log({columnData, onDeleteSuccess})
  }


 

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
async function fetchData ({ baseUrl, url}:{url: string, baseUrl: string}) {


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
    canFilter: false,

  },
  {
    key: "gender",
    name: "gender",
    canSort: true,
   isHeader: true,
    canCopy: true,
    canFilter: true,
    filters:['male', 'female']

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

export const userTableData: IncomingTableDataI = {
  baseUrl: "https://dummyjson.com",
  fn: {
    fetchFn: fetchData,
  },
  crud: {},
  heading: header,
  column: extraColumn,
  query: {pageName:"skip"},
  show: { seeMore: true, tableName:true, customButton:true },
  refresh: { intervalInSec: 120, status: true },
  subUrl: "/users",
  tableName: "user",
  color: { primary: "red", secondary: "black", tertiary: "green" },
};
