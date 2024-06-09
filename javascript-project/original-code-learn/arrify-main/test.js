/*
 * @Author: TerryMin
 * @Date: 2021-11-10 03:53:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-07 10:43:39
 * @Description: file not
 */
import test from 'ava';
import arrify from './index.js';

test('maintest', t => {
	t.deepEqual(arrify('foo'), ['foo']);
	t.deepEqual(arrify(new Map([[1, 2], ['a', 'b']])), [[1, 2], ['a', 'b']]);
	t.deepEqual(arrify(new Set([1, 2])), [1, 2]);
	t.deepEqual(arrify(null), []);
	t.deepEqual(arrify(undefined), []);

	const fooArray = ['foo'];
	t.is(arrify(fooArray), fooArray);
});

test('foo', t => {
  t.pass();
});
