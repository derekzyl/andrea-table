
import NewTable from 'andrea-table';

import { userTableData } from "../functions";

export function ViewUsers() {

  userTableData.fn.add_fn = () =>"";
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
