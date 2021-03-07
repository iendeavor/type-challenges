type MyExclude2<T, T2> = T extends T2 ? never : T
type MyOmit<T, K> = {
  [P in MyExclude2<keyof T, K>]: T[P]
}
