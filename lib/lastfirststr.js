module.exports = (str, param) => {
  if(param == "first") {
    str = str.split(" ").slice(0, -1).join(" ");
  } else if (param == "last") {
    str = str.split(" ").splice(-1);
  }
  return str;
}