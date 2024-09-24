

import { NewTable } from "../../../table/new-table";
import { userTableData } from "../functions";

export function ViewUsers() {

  userTableData.fn.addFn = () =>"";
  userTableData.show.addButton = true;
  return (
    <>
      {" "}
      <div  className="" style={{background:"black"}}>

<NewTable data={userTableData} />
      </div>
    </>
  );
}
