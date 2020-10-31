type Pop<T extends any[]> = T extends [...infer Remain, infer L]
  ? Remain
  : never