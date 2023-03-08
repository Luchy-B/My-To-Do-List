import addItems from '../__mock__/add.js';

const output = [];
describe('Test to add items to an array of objects', () => {
  const arr = [{ value: 'first Item', completed: true, index: 0 }];

  test('test function', () => {
    const first = addItems('first Item', true, output);
    expect(first).toEqual(arr);
  });

  test('should ', () => {
    const second = addItems('second Item', false, output);
    arr.push({ value: 'second Item', completed: false, index: 1 });
    expect(second).toEqual(arr);
  });
});