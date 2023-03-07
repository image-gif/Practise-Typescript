type Concat<L extends any[], R extends any[]> = [...L, ...R];

type Result = Concat<[1], [2]>; // expected to be [1, 2]

export { Concat };
