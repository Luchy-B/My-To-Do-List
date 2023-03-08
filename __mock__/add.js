const addItems = (description, completed, Items) => {
  const Item = { value: description, completed, index: Items.length };
  Items.push(Item);
  return Items;
};

export default addItems;