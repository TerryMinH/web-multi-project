/*
 * @Author: TerryMin
 * @Date: 2022-05-13 10:19:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-13 10:20:07
 * @Description: file not
 */
function add(x, y) {
    return x + y;
}

function expect(ret) {
    return {
        toBe(arg) {
            if (ret !== arg) {
                throw Error(`预计和实际不符，预期是${arg},实际是${ret}`)
            }
        }
    }
}

function test(title, fn) {
    try {
        fn();
        console.log(title, '测试通过')
    } catch (e) {
        console.log(e);
        console.log(title, '测试失败')
    }
}

test('测试数据想加', () => {
    expect(add(1, '2')).toBe(3)
})