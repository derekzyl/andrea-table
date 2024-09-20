 
import "../../index.css";
import { useTableContext } from "../hooks/context";
import { IncomingTableDataT } from "../interface/interface.table";
import TableBody from "./table-body";
import TableHead from "./table-head";


export default function TableMain(data: { data: IncomingTableDataT }) {
  const { state } = useTableContext();

  return (
    <table
      className={`table table-bordered table-striped dataTable no-footer elevated_table_data ${
        state.loading ? "table-block-transition" : ""
      }`}
      id="users_table"
      role="grid"
      aria-describedby="users_table_info"
    >
      <TableHead data={data.data} />

      <TableBody data={data.data} />
    </table>
  );
}
