function showSalary(users, age) {
  let filtUs = users.filter(user => user.age <= age);
  let result = '';
  filtUs.forEach((user, index) => {
    result += `${user.name}, ${user.balance}`;
    if (index !== filtUs.length - 1) {
      result += '\n';
    }
  });
  return result;
}