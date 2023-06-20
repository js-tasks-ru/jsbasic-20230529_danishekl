function checkSpam(str) {
  let lwr = str.toLowerCase();
  return lwr.includes ("1xbet") || lwr.includes ("xxx");
}
console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

