/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeadingT } from "./interface/interface.table";

export function addColumns(
  data: Record<string, any>[],
  column: Record<string, any>[]
) {
  const combined =
    data &&
    data.map((item) => ({
      ...Object.assign({}, ...column),
      ...item,
      checkBox: false,
    }));

  return combined;
}

export function addHeader(data: HeadingT[], header: HeadingT[]): HeadingT[] {
  const combined_data = [...header, ...data];

  return combined_data;
}
