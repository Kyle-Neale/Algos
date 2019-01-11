/*******************************************************************************

Given the root node of a tree, return an array where each element is the width
of the tree at each level

Example:
        0
      / |  \
    1   2   3
    |       |
    4       5
Answer: [1, 3, 2]

*******************************************************************************/

const levelWidth = (root) => {
  const arr = [root, 'stop'];
  const widths = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 'stop') {
      widths.push(0);
      arr.push('stop');

    } else {
      arr.push(...node.children);
      widths[widths.length - 1]++;
    }
  }
  return widths
}
