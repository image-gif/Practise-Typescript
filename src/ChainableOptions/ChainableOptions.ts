type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & { [R in K]: V }>;
  get(): T;
};

declare const config: Chainable;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

type x = keyof { name: '123'; age: 12 };

type y = '2342';

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

export { Chainable };
