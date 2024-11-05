# Merge Sort Algorithm

This repository contains an implementation of the **merge sort** algorithm in JavaScript. Merge sort is a divide-and-conquer sorting algorithm that recursively splits an array into two halves, sorts each half, and then merges them back together in sorted order.

## Function: `mergeSort(array)`

### Description:
- Takes an unsorted array as input.
- Recursively splits the array into smaller subarrays.
- Merges the sorted subarrays back into a single sorted array.

### Example:
```js
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// Output: [0, 1, 1, 2, 3, 5, 8, 13]

mergeSort([105, 79, 100, 110]);
// Output: [79, 100, 105, 110] 
```

## Time Complexity:
- Worst-case and Average-case: O(n log n)
- Best-case: O(n log n)

## Space Complexity:
- O(n) (due to additional space used for splitting and merging arrays)
