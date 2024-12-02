import { InitialStateI } from "table/interface/interface.table";

export const initialState:InitialStateI = {
  remoteData: [],
  bodyData: [],
  filterLimit: 5,
  filterPaginate: 1,
  selectAll: false,
  selectedItems: [],
  filterValues: {},
  sortConfig: {},
  columnVisibility: {},
  openFilterBox: false,
  isColumnMenuOpen: false,
  loading: false,
  show: { exports: false, pdf: false, csv: false, excel: false, print: false, columnVisibility: false, deleteButton: false, addButton: false, checkBox: false, customButton: false, seeMore: false, tableName: false },
  
  color:{primary:'',secondary:'', tertiary:'',background:'', cellBackground:'', filterBackground:'', exportBackground:''} }

