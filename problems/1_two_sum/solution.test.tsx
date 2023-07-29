const twoSumTest = require('./solution')

test('normal case', ()=> {
    console.log('normal case running')
    const nums = [1,2,3];
    const target = 4;
    const expected = [0,2]
    const output = twoSumTest(nums, target);
    expect(output).toEqual(expected);
  });

