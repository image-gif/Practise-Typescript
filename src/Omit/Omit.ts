/**
 * Implement the built-in Omit<T, K> generic without using it.
 * Constructs a type by picking all properties from T and then removing K
 * For example
 *
 *
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

type MyOmit<T, U extends keyof T> = {
  [key in keyof T as key extends U ? never : key]: T[key];
};

// type y = MyExclude<Todo, 'description' | 'title'>;

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false
};

export { MyOmit };
