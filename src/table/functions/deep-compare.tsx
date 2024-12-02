export function deepCompare(obj1:object, obj2:object):boolean {
  // Check if both are the same object reference
  if (obj1 === obj2) return true;

  // Check if both are objects and not null
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  // Get keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if number of keys is the same
  if (keys1.length !== keys2.length) return false;

  // Recursively compare each key
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;

    const val1 = obj1[key as keyof typeof obj1];
    const val2 = obj2[key as keyof typeof obj2];

    // If both are objects, recursively compare
    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!deepCompare(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}


export function compareArraysOfObjects(
  prevData: any[],
  newData: any[],
  compareKeys: string[] = []
): boolean {
  // Quick length check
  if (prevData.length !== newData.length) return false;

  // If no specific keys provided, compare entire objects
  if (compareKeys.length === 0) {
    return JSON.stringify(prevData) === JSON.stringify(newData);
  }

  // Deep comparison with specific keys
  return prevData.every((prevItem, index) => {
    const newItem = newData[index];

    // Compare only specified keys
    return compareKeys.every((key) => {
      // Handle nested objects/arrays if needed
      if (
        typeof prevItem[key] === "object" &&
        typeof newItem[key] === "object"
      ) {
        return JSON.stringify(prevItem[key]) === JSON.stringify(newItem[key]);
      }

      return prevItem[key] === newItem[key];
    });
  });
}
