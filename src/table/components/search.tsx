import { onChangeHandler } from "../functions/change";
import { useTableContext } from "../hooks/context";

export default function Search() {
  const { state, dispatch } = useTableContext();
  return (
    <div className="m:col-span-3 md:col-span-12 lg:col-span-3">
      <div
        id="users_table_filter"
        className="relative"
        style={{ position: "relative" }}
      >
        <input
          name="filter_search"
          onChange={(e) => onChangeHandler(dispatch, state, e, "")}
          type="search"
          className="custom-input-andrea"
          placeholder="  Search ..."
          aria-controls="users_table"
          spellCheck={false}
          data-ms-editor="true"
        />

        <div className="custom-container-icon-andrea">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="custom-search-icon-andrea"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
