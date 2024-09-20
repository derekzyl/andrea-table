
import { onChangeHandler } from "../functions/change";
import { useTableContext } from "../hooks/context";

export default function Select() {
  const { state, dispatch } = useTableContext();
  

  return (
    <div className="">
      <div className=" font-[500]" id="users_table_length">
        <label>
          Show{" "}
          <select
            onChange={(e) => onChangeHandler(dispatch, state, e, "")}
            value={state.filterLimit}
            name="filter_limit"
            aria-controls="users_table"
            className="select-button appearance-none border-transparent custom-input-andrea w-[50px] px-2 py-1 "
            style={{ padding: "2px 1px" , width:"50px"}}
          >
            {" "}
            <option value="5">5</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
            <option value="1000">1,000</option>
            <option value="-1">All</option>
          </select>{" "}
          entries
        </label>
      </div>
    </div>
  );
}
