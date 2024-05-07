let findTriangleType = () => {
  let side1 = 80;
  let side2 = 20;
  let side3 = 10;

  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("Isosceles triangle");
  } else {
    console.log("Scalene triangle");
  }
};

findTriangleType();
