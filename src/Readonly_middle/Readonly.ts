interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T = any> = {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
};

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
};
// @ts-expect-error
todo.title = 'Hello'; // Error: cannot reassign a readonly property
// @ts-expect-error
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK

export { MyReadonly2 };
