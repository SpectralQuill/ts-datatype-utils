import Comparison from "./Comparison.js";

export type collection< T > = T[] | Set< T >;
export type comparator< T > = ( value1: T, value2: T ) => Comparison;
export type frac = number;
export type index = int;
export type int = number;
export type length = int;
export type size = int;
