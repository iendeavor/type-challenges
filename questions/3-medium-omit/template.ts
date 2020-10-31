type MyOmit<T, K> = {
  [P in MyExclude<keyof T, K>]: T[P]
}
