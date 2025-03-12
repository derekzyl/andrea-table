import { JSX } from 'react/jsx-runtime';
import { MemoExoticComponent } from 'react';

/**
 * The type `ColumnElementT` in TypeScript represents a column element with data of type `T` and
 * optional CRUD operations and callbacks.
 * @property {T | Record<string, any>} columnData - The `columnData` property in the `ColumnElementT`
 * type represents the data for a specific column. It can be of type `T` or a generic object with
 * string keys and any values.
 * @property {| {
 *         add?: boolean;
 *         edit?: boolean;
 *         custom?: boolean;
 *         delete?: boolean;
 *         view?: boolean;
 *         export?: boolean;
 *       }
 *     | undefined} crud - The `crud` property in the `ColumnElementT` type is an optional property
 * that can have the following sub-properties:
 * @property onDeleteSuccess - The `onDeleteSuccess` property is a function that will be called when a
 * deletion operation is successful. It is optional and can be undefined if not provided.
 */
export declare type ColumnElementT<T> = {
    columnData: T | Record<string, any>;
    crud?:
    | {
        add?: boolean;
        edit?: boolean;
        custom?: boolean;
        delete?: boolean;
        view?: boolean;
        export?: boolean;
    }
    | undefined;

    onDeleteSuccess?: () => void | undefined;
}

/**
 * The type `ColumnElementT` in TypeScript represents a column element with data of type `T` and
 * optional CRUD operations and callbacks.
 * @property {T | Record<string, any>} columnData - The `columnData` property in the `ColumnElementT`
 * type represents the data for a specific column. It can be of type `T` or a generic object with
 * string keys and any values.
 * @property {| {
 *         add?: boolean;
 *         edit?: boolean;
 *         custom?: boolean;
 *         delete?: boolean;
 *         view?: boolean;
 *         export?: boolean;
 *       }
 *     | undefined} crud - The `crud` property in the `ColumnElementT` type is an optional property
 * that can have the following sub-properties:
 * @property onDeleteSuccess - The `onDeleteSuccess` property is a function that will be called when a
 * deletion operation is successful. It is optional and can be undefined if not provided.
 */
declare type ColumnElementT_2<T> = {
    columnData: T | Record<string, any>;
    crud?: {
        add?: boolean;
        edit?: boolean;
        custom?: boolean;
        delete?: boolean;
        view?: boolean;
        export?: boolean;
    } | undefined;
    onDeleteSuccess?: () => void | undefined;
};

/**
 * The type `ColumnT<T>` represents a mapping of string keys to React elements with a specific type
 * parameter `T`.
 * @property [key: undefined] - It looks like you are defining a type `ColumnT<T>` which is an object
 * with keys of type `string` and values of type `React.ReactElement<ColumnElementT<T>>`.
 */
export declare type ColumnT<T> = {
    [key: string]:React.ReactElement<ColumnElementT<T>>;
}

/**
 * The type `ColumnT<T>` represents a mapping of string keys to React elements with a specific type
 * parameter `T`.
 * @property [key: undefined] - It looks like you are defining a type `ColumnT<T>` which is an object
 * with keys of type `string` and values of type `React.ReactElement<ColumnElementT<T>>`.
 */
declare type ColumnT_2<T> = {
    [key: string]: React.ReactElement<ColumnElementT_2<T>>;
};

declare type headingKeyT<T> = keyof T | (string & {
    __brand?: "additionalKey";
}) | "custom" | "action";

declare type headingKeyT_2<T> =
| keyof T
| (string & { __brand?: "additionalKey" })
| "custom"
| "action";

/**
 * The type `HeadingT` defines properties for a heading element with optional sorting, filtering, and
 * copying capabilities.
 * @property {| string
 *     | React.ReactElement<{
 *         handleSort: () => void;
 *         sortState: boolean | undefined;
 *       }>} name - The `name` property in the `HeadingT` type can be either a string or a React
 * element with specific props (`handleSort`, `sortState`).
 * @property key - The `key` property in the `HeadingT` type represents the key used to uniquely
 * identify the heading. It is of type `headingKeyT<T>`.
 * @property {boolean} canSort - The `canSort` property in the `HeadingT` type specifies whether the
 * heading can be sorted. By default, it is set to `false` if not explicitly provided.
 * @property {boolean} isHeader - The `isHeader` property is a boolean value that is used to indicate
 * whether the heading is a header or not. By default, it is set to `true`.
 * @property {boolean} canFilter - The `canFilter` property in the `HeadingT` type indicates whether
 * filtering is allowed for the heading. It is a required boolean property, meaning it must be provided
 * when defining a `HeadingT` object.
 * @property {boolean} canCopy - The `canCopy` property in the `HeadingT` type represents whether the
 * heading can be copied. It is optional and defaults to `false` if not specified.
 * @property {boolean} isSearchFilter - The `isSearchFilter` property in the `HeadingT` type indicates
 * whether the heading can be used as a search filter. If this property is set to `true`, it means that
 * the heading can be used to filter search results based on its value. If it is set to `false`
 * @property {string[] | { [key: string]: string }[]} filters - The `filters` property in the
 * `HeadingT` type represents the available filter options for the heading. It can be either an array
 * of strings or an array of objects where each object represents a key-value pair for filtering
 * options.
 */
export declare type HeadingT<T> = {
    name:
    | string
    | React.ReactElement<{
        handleSort: () => void;
        sortState: boolean | undefined;
    }>;
    key: headingKeyT_2<T>;
    canSort?: boolean; // set to default false
    isHeader?: boolean; // set to default true
    canFilter: boolean;
    canCopy?: boolean;
    isSearchFilter?: boolean;
    filters?: string[] | { [key: string]: string }[];
};

/**
 * The type `HeadingT` defines properties for a heading element with optional sorting, filtering, and
 * copying capabilities.
 * @property {| string
 *     | React.ReactElement<{
 *         handleSort: () => void;
 *         sortState: boolean | undefined;
 *       }>} name - The `name` property in the `HeadingT` type can be either a string or a React
 * element with specific props (`handleSort`, `sortState`).
 * @property key - The `key` property in the `HeadingT` type represents the key used to uniquely
 * identify the heading. It is of type `headingKeyT<T>`.
 * @property {boolean} canSort - The `canSort` property in the `HeadingT` type specifies whether the
 * heading can be sorted. By default, it is set to `false` if not explicitly provided.
 * @property {boolean} isHeader - The `isHeader` property is a boolean value that is used to indicate
 * whether the heading is a header or not. By default, it is set to `true`.
 * @property {boolean} canFilter - The `canFilter` property in the `HeadingT` type indicates whether
 * filtering is allowed for the heading. It is a required boolean property, meaning it must be provided
 * when defining a `HeadingT` object.
 * @property {boolean} canCopy - The `canCopy` property in the `HeadingT` type represents whether the
 * heading can be copied. It is optional and defaults to `false` if not specified.
 * @property {boolean} isSearchFilter - The `isSearchFilter` property in the `HeadingT` type indicates
 * whether the heading can be used as a search filter. If this property is set to `true`, it means that
 * the heading can be used to filter search results based on its value. If it is set to `false`
 * @property {string[] | { [key: string]: string }[]} filters - The `filters` property in the
 * `HeadingT` type represents the available filter options for the heading. It can be either an array
 * of strings or an array of objects where each object represents a key-value pair for filtering
 * options.
 */
declare type HeadingT_2<T> = {
    name: string | React.ReactElement<{
        handleSort: () => void;
        sortState: boolean | undefined;
    }>;
    key: headingKeyT<T>;
    canSort?: boolean;
    isHeader?: boolean;
    canFilter: boolean;
    canCopy?: boolean;
    isSearchFilter?: boolean;
    filters?: string[] | {
        [key: string]: string;
    }[];
};

declare interface IncomingTableDataI<T> {
    tableName: string;
    tableDescription?: string;
    baseUrl: string;
    subUrl: string;
    heading: HeadingT_2<T>[];
    column?: ColumnT_2<T>[];
    extraComponent?: React.ReactElement;
    query: {
        searchQueryName?: string;
        pageName?: string;
        limitName?: string;
    };
    style?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        background?: string;
        cellBackground?: string;
        cellHoverBackground?: string;
        filterBackground?: string;
        exportBackground?: string;
        borderSpacing?: string;
    };
    refresh?: {
        status: boolean;
        intervalInSec: number;
    };
    fn: {
        fetchFn: ({ baseUrl, url }: {
            url: string;
            baseUrl: string;
        }) => Promise<any>;
        addFn?: () => void;
        gotoFn?: () => any;
        customFn?: () => void;
        deleteFn?: ({ data }: {
            data: Array<any>;
        }) => void;
    };
    buttonName?: {
        customButton?: string;
    };
    show: {
        filters?: boolean;
        pagination?: boolean;
        search?: boolean;
        select?: boolean;
        sort?: boolean;
        table?: boolean;
        exports?: boolean | {
            pdf?: boolean;
            csv?: boolean;
            excel?: boolean;
            print?: boolean;
        };
        columnVisibility?: boolean;
        deleteButton?: boolean;
        addButton?: boolean;
        checkBox?: boolean;
        customButton?: boolean;
        seeMore?: boolean;
        tableName?: boolean;
    };
    crud: {
        add?: boolean;
        edit?: boolean;
        custom?: boolean;
        delete?: boolean;
        view?: boolean;
        export?: boolean;
    };
}

declare interface IncomingTableDataI_2<T> {
    /* The `tableName: string;` line is defining a property named `tableName` in the `IncomingTableDataI`
    interface. This property specifies the name of the table and expects a value of type `string`. It
    is used to store and display the name of the table within the table component. */
    tableName: string;
    tableDescription?: string;
    baseUrl: string;
    subUrl: string;
    heading: HeadingT<T>[];
    column?: ColumnT<T>[];
    extraComponent?: React.ReactElement;
    /* The `searchQueryName?: string` default value is q; in the `IncomingTableDataI` interface is defining an optional
    property named `searchQueryName` of type `string`. This property allows you to specify the name of
    the search query parameter that will be used when performing search operations within the table
    component. */
    query: {
        searchQueryName?:string
        pageName?: string;
        limitName?: string;
    };
    style?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        background?: string;
        cellBackground?: string;
        cellHoverBackground?: string;
        filterBackground?: string;
        exportBackground?: string;
        borderSpacing?:string;


    };
    refresh?: {
        status: boolean;
        intervalInSec: number;
    };
    /* The `fn` property in the `IncomingTableDataI` interface is defining an object that contains
    various functions related to table behavior. It includes the following properties: */
    fn: {
        fetchFn: ({baseUrl, url}:{url: string, baseUrl: string}) => Promise<any>;
        addFn?: () => void;
        gotoFn?: () => any;
        customFn?: () => void;
        deleteFn?: ({data}:{data:Array<any>}) => void;

    };
    buttonName?: {
        customButton?: string;
    },
    /* The `show` property within the `IncomingTableDataI` interface is defining an object that specifies
    various display options for the table component. It includes boolean properties that control the
    visibility of different elements within the table, such as filters, pagination, search bar,
    selection checkboxes, sorting options, table itself, exports button, add button, custom button,
    see more button, and the table name. Each boolean property indicates whether the corresponding
    element should be displayed or not in the table interface based on its value (true or false). */
    show: {
        filters?: boolean;
        pagination?: boolean;
        search?: boolean;
        select?: boolean;
        sort?: boolean;
        table?: boolean;
        exports?: boolean | {
            pdf?: boolean;
            csv?: boolean;
            excel?: boolean;
            print?: boolean;

        };
        columnVisibility?: boolean;
        deleteButton?: boolean;
        addButton?: boolean;
        checkBox?: boolean;
        customButton?: boolean;
        seeMore?: boolean;

        tableName?: boolean;
    };
    crud: {
        add?: boolean;
        edit?: boolean;
        custom?: boolean;
        delete?: boolean;
        view?: boolean;
        export?: boolean;
    };
}

declare type IncomingTableDataT<T> = IncomingTableDataI<T>;

export declare const NewTable: MemoExoticComponent<(data: {
data: IncomingTableDataT<any>;
}) => JSX.Element>;

export declare type TableDataT<T> = IncomingTableDataI_2<T>;

export { }
