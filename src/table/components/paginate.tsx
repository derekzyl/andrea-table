import { onChangeHandler } from "../functions/change";
import { useTableContext } from "../hooks/context";
import { ActionTableTypesE } from "../state-manager/table-action-types";

export default function Paginate(data: { de_length: number }) {
  const { dispatch, state } = useTableContext();
  return (
    <div
      className="tables_paginate paging_simple_numbers"
      id="users_table_paginate"
    >
      <ul className="pagination ">
        <li
          className=" btn  paginate_button previous "
          id="users_table_previous"
        >
          <button
            className="paginate_button"
            onClick={() =>
              dispatch({
                type: ActionTableTypesE.SET_FILTER_PAGINATE,
                payload: "-1",
              })
            }
            disabled={state.filterPaginate === 1}
          >
            Previous
          </button>
        </li>
        <li className=" input-paginate-li ">
          <input
            onChange={(e) => onChangeHandler(dispatch, state, e, "")}
            name="filter_paginate"
            type="number"
            className="input-paginate custom-input-andrea"
            style={{ width: "32px" }}
            placeholder="1"
            value={state.filterPaginate}
          />
        </li>
        <li className=" btn  paginate_button next" id="users_table_next">
          <button
            className="paginate_button"
            onClick={() =>
              dispatch({
                type: ActionTableTypesE.SET_FILTER_PAGINATE,
                payload: "+1",
              })
            }
            disabled={
              data.de_length
                ? state.filterLimit > data.de_length
                : state.filterLimit > 5
            }
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
