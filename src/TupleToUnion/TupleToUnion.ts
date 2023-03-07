type Arr = ['1', '2', '3'];

// type TupleToUnion<T extends any[]> = keyof {
//   [key in T[number]]: key;
// };

// type TupleToUnion<T extends any[]> = T[number];

type TupleToUnion<T extends any[]> = T extends Array<infer U> ? U : never;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

export { TupleToUnion };
