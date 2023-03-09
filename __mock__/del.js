const deleteFunction = (wrapper, index) => {
  wrapper.forEach((element) => {
    if (element.index === index) {
      wrapper.splice(index, 1);
    }
  });

  wrapper.forEach((item, index) => {
    item.index = index;
  });

  return wrapper;
};

export default deleteFunction;