function scan(arg) {
  let result = [];


  for (let i = 0 ; i < arg.length ; i++){
    if (arg[i] == 'contraband') {
      result.push(i);
    }
  }
  return result;


}
