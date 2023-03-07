// 在数组尾部添加类型
type Push<T extends any[], U> = [...T, U];

type Result = Push<[1, 2], '3'>; // [1, 2, '3']

type x = Push<['1', 2, '3'], boolean>;

export { Push };
