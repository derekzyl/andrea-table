/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


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


//   variableFromTable: any;
//   crud: IncomingTableDataT["crud"];
//   onDeleteSuccess?: () => void;
// }> = ({ variableFromTable, onDeleteSuccess }) => {
//   const dispatch = useAppDispatch();

//   const tableData = useAppSelector((state) => state.tableData);
//   const [del] = useLazyDeleteUserQuery();

//   const handleClick = () => {};
//   const handleDelete = async (id: string) => {
//     // //console.log("hello world handle click", variableFromTable, "and", crud);
//     // //console.log("hello world handle delete", tableData, "and", crud);

//     try {
//       if (tableData.click === 0) {
//         await del(id);

//         dispatch(setClickCount(1)); // Assuming this is used for disabling the button
//         onDeleteSuccess && onDeleteSuccess();
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       toast.error(`${error}`);
//     }
//   };

//   return (
//     <div className="">
//       {
//         <CustomModal
//           children={
//             <DeleteModal
//               props={{
//                 id: tableData.data.id,
//                 confirm: handleDelete,
//                 metadata: [
//                   `${tableData.data.firstName} ${tableData.data.lastName}`,
//                 ],
//               }}
//             />
//           }
//         />
//       }
//       <NavLink
//         onClick={() => {
//           handleClick();
//           /*   dispatch(hideMiniLayout()); */
//         }}
//         className="btn-primary h-[5px] p-[6px] text-[14px]"
//         to={`/user/${variableFromTable.id}/edit`}
//       >
//         edit
//       </NavLink>
//       <NavLink
//         onClick={() => {
//           handleClick();
//           /*      dispatch(hideMiniLayout()); */
//         }}
//         className="btn-secondary m-2 p-[6px] text-[14px]"
//         to={`/user/${variableFromTable.id}/view`}
//       >
//         view
//       </NavLink>
//       <button
//         className="btn-tertiary"
//         onClick={() => {
//           dispatch(setTableData(variableFromTable));
//           dispatch(setClickCount(0));
//           dispatch(openDeleteModal());
//         }}
//       >
//         delete
//       </button>
//     </div>
//   );
// };
const ActionHeader: React.FC<{
  variableFromTable: any;
  crud: IncomingTableDataT["crud"];
  onDeleteSuccess?: () => void;
}> = ({ variableFromTable, onDeleteSuccess }) => {
  console.log({variableFromTable, onDeleteSuccess})


 

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
