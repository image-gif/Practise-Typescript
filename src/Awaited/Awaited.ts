type ExampleType = Promise<string>;

// Promise和PromiseLike 后者只有then没有catch

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

// 将promise中的类型取出
// type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;

type Result = MyAwaited<ExampleType>; // string

export { MyAwaited };
