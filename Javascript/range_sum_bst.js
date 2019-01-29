/******************************************************************************
Given the root node of a binary search tree, return the sum of values of all
nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
******************************************************************************/

const rangeSumBST = (root, L, R) => {
    let result = SumBST(root, 0, L, R);
    return result;

};

const SumBST = (node, sum, L, R) => {
    if (node !== null) {
        if (node.val <= R && node.val >= L){
            sum += node.val;

        }
        sum = SumBST(node.left,sum,L, R);
        sum = SumBST(node.right, sum, L, R);
    }
    return sum;
}
