import deleteFunction from '../__mock__/del.js';

describe('Checks that a list is deleted', () => {
  const arr = [
    { value: 'one', checked: false, index: 0 },
    { value: 'two', checked: false, index: 1 },
  ];

  test('delete last item', () => {
    expect(deleteFunction(arr, arr[1].index)).toEqual([
      { value: 'one', checked: false, index: 0 },
    ]);
  });

  test('delete first item', () => {
    expect(deleteFunction(arr, arr[0].index)).toEqual([]);
  });
});