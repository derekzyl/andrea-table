/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { handleFilterChange } from "../functions/filter";
import { isMobile } from "../functions/utils";
import { useTableContext } from "../hooks/context";
import { FilterIcon } from "../icons";
import { HeadingT, IncomingTableDataT } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";
import { CalendarFilter } from "./date-filter";
import "./filter.css";
import Search from "./search";
import Select from "./select";

export default function Filter (data: { data: any[]; header: HeadingT<any>[]; incomingData:IncomingTableDataT<any>  }) {
  const { state, dispatch } = useTableContext();
    const show = data.incomingData.show;
   const showSearch = show.search ?? true;
     const showSelect = show.select ?? true;
     const showFilter = show.filters ?? true;
  const filterBackground = state.style?.filterBackground;
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on component mount and on window resize
    setMobile(isMobile());
    const handleResize = () => setMobile(isMobile());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleHeaders = data.header.filter(
    (header) => state!.columnVisibility[String(header.key) as any] !== false
  );

  // Function to toggle filter option selection
  const handleOptionClick = (header: HeadingT<any>, option: any) => {
    const syntheticEvent = {
      currentTarget: {
        name: String(header.key),
        value: option === "All" ? "All" : option,
      },
    };

    handleFilterChange(
      dispatch,
      state,
      syntheticEvent as any,
      header.key as any,
      data.header,
      data.data
    );
  };

  const toggleFilterBox = () => {
    dispatch({ type: ActionTableTypesE.SET_OPEN_FILTER_BOX, payload: "" });
  };

  const renderFilterOptions = (header: HeadingT<any>, _index: number) => {
    if (header.key === "createdAt") {
      return (
        <div className="filter-date-options">
          {[
            "All",
            "today",
            "yesterday",
            "this_week",
            "last_week",
            "this_month",
            "last_month",
            "this_year",
            "last_year",
          ].map((option) => (
            <button
              key={option}
              className={`filter-option-btn ${
                state.filterValues?.["date_range"] === option
                  ? "filter-option-selected"
                  : ""
              }`}
              onClick={() =>
                handleOptionClick({ ...header, key: "date_range" }, option)
              }
            >
              {option.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      );
    }

    else if (header.key === "calendarFilter") {
      return <CalendarFilter data={data} />;
    }

  

    // Render filter options as buttons instead of dropdown
    return (
      <div className="filter-buttons-container">
        <button
          className={`filter-option-btn ${
            state.filterValues?.[String(header.key)] === "All" ||
            !state.filterValues?.[String(header.key)]
              ? "filter-option-selected"
              : ""
          }`}
          onClick={() => handleOptionClick(header, "All")}
        >
          All
        </button>
        {header.filters &&
          header.filters.map((item, k) => {
            let displayValue, actualValue;

            if (
              typeof item === "string" ||
              typeof item === "number" ||
              typeof item === "boolean" ||
              typeof item === "bigint" ||
              typeof item === "symbol"
            ) {
              displayValue = String(item);
              actualValue = item;
            } else if (typeof item === "object") {
              const keys = Object.keys(item)[0];
              displayValue = keys;
              actualValue = item[keys];
            } else {
              return null;
            }

            return (
              <button
                key={k}
                className={`filter-option-btn ${
                  state.filterValues?.[String(header.key)] === actualValue
                    ? "filter-option-selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(header, actualValue)}
              >
                {displayValue}
              </button>
            );
          })}
      </div>
    );
  };

  return (
    <div
      className={`filter-container ${
        mobile ? "filter-mobile" : "filter-desktop"
      } ${state.openFilterBox ? "filter-open" : ""}`}
    >
      {/* Filter Toggle Button */}
      <div className="filter-toggle sm-elevated-paper">
        {showSelect && <Select />}
    <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap:10,
    }}>
          {showSearch && <Search />}
      {showFilter &&    <div
            className="filter-header"
            onClick={toggleFilterBox}
            style={{ backgroundColor: filterBackground }}
          >
            <span className="filter-icon">
              <FilterIcon />
            </span>
          </div>}
    </div>
      </div>

      {/* Backdrop for mobile (closes filter when clicking outside) */}
      {mobile && state.openFilterBox && (
        <div className="filter-backdrop" onClick={toggleFilterBox}></div>
      )}

      {/* Filter Content Area */}
      <div
        className={`filter-content ${
          state.openFilterBox ? "filter-content-visible" : ""
        }`}
        style={{ backgroundColor: filterBackground }}
      >
        <div className="filter-sections">
          {visibleHeaders &&
            visibleHeaders.map((header, index) => {
              const canFilter = header.canFilter ?? false;

              if (!canFilter) return null;

              return (
                <div key={index} className="filter-section">
                  <h4 className="filter-section-title">{header.name}</h4>
                  {renderFilterOptions(header, index)}
                </div>
              );
            })}
        </div>
      </div>

      {/* CSS Styles */}
    </div>
  );
}
