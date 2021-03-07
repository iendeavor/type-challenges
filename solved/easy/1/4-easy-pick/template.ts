type MyExtract<T, K> = T extends K ? T : never
type MyPick<T, K extends keyof T> = {
  [P in MyExtract<keyof T, K>]: T[P]
}
