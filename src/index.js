// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    if (matrix.length !== 0) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0 || i === 0) {
                matrix[i] = matrix[i];
            } else {
                matrix[i] = matrix[i].reverse();
            }
        }
        return matrix.flat(1);
    } else {
        return [];
    }
}