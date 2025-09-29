// With generic type parameter for value type
const isObjectValid = <T>(obj: unknown): obj is Record<string, T> => {
  return typeof obj === 'object' && 
         obj !== null && 
         !Array.isArray(obj) && 
         Object.keys(obj).length > 0;
};

// // Usage
// if (isObjectValid<number>(myObj)) {
//   // myObj is now typed as Record<string, number>
// }

// With generic type parameter for type safety
const isArrayValid = <T>(arr: unknown): arr is T[] => {
  return Array.isArray(arr) && arr.length > 0;
};

// // Usage
// if (isArrayValid<string>(myArray)) {
//   // myArray is now typed as string[]
// }

export { isObjectValid,isArrayValid}