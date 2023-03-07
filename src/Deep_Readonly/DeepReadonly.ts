type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

// type DeepReadonly<T> = {
//   readonly [key in keyof T]: keyof T[key] extends never
//     ? T[key]
//     : DeepReadonly<T[key]>;
// };

type DeepReadonly<T> = T extends Function
  ? T
  : T extends Object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T extends Array<unknown>
  ? {
      readonly [K in number]: T[number];
    }
  : T;

type Todo = DeepReadonly<X>; // should be same as `Expected`

type a = number;
type b = keyof a extends never ? true : false;

export { DeepReadonly };
