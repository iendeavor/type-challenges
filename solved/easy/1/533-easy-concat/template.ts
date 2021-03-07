type Concat<T, U> = T extends any[] ? U extends any[] ? [...T, ...U] : never : never
