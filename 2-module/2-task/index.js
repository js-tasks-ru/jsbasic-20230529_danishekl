function isEmpty(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}

let schedule = {};
isEmpty(schedule); // true

schedule["8:30"] = "подъём";
isEmpty(schedule); // false

