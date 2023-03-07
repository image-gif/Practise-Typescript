// 数组头部添加类型
type Unshift<T extends any[], U> = [U, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]

export { Unshift };
