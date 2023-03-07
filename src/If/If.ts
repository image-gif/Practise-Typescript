// 为true 返回左侧的值，否则返回右侧的值
type If<T extends Boolean, L, R> = T extends true ? L : R;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'

export { If };
