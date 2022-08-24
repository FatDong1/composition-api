export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type ObjectFromList<T extends readonly string[], V = string> = {
  [K in T extends readonly (infer U)[] ? U : never]: V
}

export type UnionFromObjectKey<
  T extends Record<string, unknown>,
  V = string
> = {
  [K in T extends Record<infer U, unknown> ? U : never]: V
}
