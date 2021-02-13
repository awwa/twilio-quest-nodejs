function addFirstToLast(arg) {
  if (arg.length > 0) {
    const first = arg[0];
    const last = arg.slice(-1)[0];
    return first + last;
  }
  if (arg.length == 0) {
    return '';
  }
}
