let x = {
  value: "one",
  next: {
    value: "two",
    next: { value: "three", next: { value: "four", next: null } },
  },
};

function search(current, param) {
  if (!current) {
    return null;
  }
  while (current) {
    if (current.value === param) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}

console.log(search(x, "four"));
