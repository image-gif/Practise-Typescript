const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...arg: infer U) => any ? U : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

export { MyParameters };
