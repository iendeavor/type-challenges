type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T]: T[P]
} & {
  readonly [P in K]: T[P]
}
