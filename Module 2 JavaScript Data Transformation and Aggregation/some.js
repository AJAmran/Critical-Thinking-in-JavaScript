const currentUser = ["user", "editor", "admin"];
const featureAccessRole = ["admin", "manager"];

const canAccessUser = currentUser.some((role) =>
  featureAccessRole.includes(role),
);

console.log(canAccessUser);

const arr = Array.from({ length: 5 }).fill("Amran");

console.log(arr);

const number = [1, 2, 3];

const double = Array.from(number, (i) => i * 2);

console.log(double);

const range = Array.from({ length: 5 }, (_, i) => i + 1);

console.log(range);

//? Range

const ranges = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(ranges(0, 11, 2));