type ValueOf<T> = T extends readonly any[] ? T[number] : never
type TupleToObject<T extends readonly any[]> = {
  [P in ValueOf<T>]: P
}
