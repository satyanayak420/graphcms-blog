// console.log(l1.join(","));
// console.log(BigInt(l1.toString()));
var addTwoNumbers = function (l1, l2) {
  function toString(node) {
    if (!node) return "";
    return `${node.val}` + toString(node.next);
  }

  //   const list1String = l1.split("").reverse().join("");
  //   const list2String = toString(l2).split("").reverse().join("");

  //   const bigInt1 = BigInt(list1String);
  //   const bigInt2 = BigInt(list2String);
  //   const sum = bigInt1 + bigInt2;
  //   return sum.toString();
};

const big1 = BigInt("123");
const big2 = BigInt("456");
const sum = big1 + big2;

console.log(big1);

console.log(Number(sum));
const l1 = [1, 2, 3];
const l2 = [2, 4, 6];
console.log(addTwoNumbers(l1, l2));
// const str = "Satya";

// console.log(str.split(""));
[
  "25009820",
  "25008723",
  "211002",
  "25009202",
  "200001",
  "25009163",
  "23145412",
  "25007591",
  "25008150",
  "200936",
  "23141621",
  "25009203",
  "25002608",
  "25006041",
  "203610",
  "23137327",
  "25009204",
  "214830",
  "23231418",
  "206174",
  "214612",
  "27009195",
  "203656",
  "214405",
  "27018116",
  "203037",
  "214609",
  "25005940",
  "25015400",
  "25004424",
  "214416",
  "25011033",
  "209397",
  "25012174",
  "25008546",
  "206923",
  "23142931",
];
