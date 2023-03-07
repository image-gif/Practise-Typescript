import type { Equal } from '@type-challenges/utils';
type Includes<T extends any[], U> = T extends [infer first, ...infer reset]
  ? Equal<first, U> extends true
    ? true
    : Includes<reset, U>
  : false;
// 感觉还是比较有一定的难度的，虽然想到了要递归（这种方式也不行，想了一下），但是一直没有写出来那种；
// 然后发现以上面这种方式，逐个遍历

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`

// type Y<T extends any[], U> = U extends T[number]
//   ? T[number] extends U
//     ? true
//     : false
//   : false;

export { Includes };
