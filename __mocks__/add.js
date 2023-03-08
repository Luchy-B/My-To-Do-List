// const addFunction = () => {
//     collection = [];
//     const filtered = get.filter((x) => x.isChecked !== true);
//     count = 0;
//     if (filtered.length === count) {
//       collection.push(count);
//       localStorage.clear();
//     }
//     filtered.forEach((item) => {
//       new CreateList().create(item.text, item.isChecked);
//     });
// }

// export default deleteFunction;

const createMock = (input, checked, output) => {
  const object = { value: input, checked, index: output.length };
  output.push(object);
  return output;
};

export default createMock;