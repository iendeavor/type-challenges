type DeepReadonly<T> = T extends object
    ? T extends Function
      ? T
      : {
        readonly [P in keyof T]: DeepReadonly<T[P]>
      }
    : T
