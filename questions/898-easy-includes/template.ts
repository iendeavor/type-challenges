type Includes<T extends readonly any[], U> = T[0] extends never
  ? false
  : U extends T[0]
    ? true
    : Includes<T extends [any, ...infer R] ? R : never[], U>;
