declare module '@vercel/postgres' {
  export interface QueryResult<T = any> {
    rows: T[];
    rowCount: number;
    command: string;
    fields: any[];
  }

  export interface SqlQueryResult<T = any> extends QueryResult<T> {
    rows: T[];
  }

  export interface SqlTag {
    <T = any>(strings: TemplateStringsArray, ...values: any[]): Promise<SqlQueryResult<T>>;
  }

  export const sql: SqlTag;
} 