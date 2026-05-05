class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const M = matrix.length
        const N = matrix[0]?.length ?? 0
        const I = M*N
        if (M === 0 || N === 0) return false
        const i2m = i => Math.floor(i / N)
        const i2n = i => i % N
        const mntoi = (m, n) => N*m + n
        const get_mat = i => matrix[i2m(i)][i2n(i)]
        let [ileft, iright] = [0, I-1]
        if (get_mat(ileft) === target || get_mat(iright) === target) return true
        if (target < get_mat(ileft) || target > get_mat(iright)) return false
        while (iright - ileft > 1) {
            const imid = Math.floor((iright + ileft)/2)
            if (target > get_mat(imid)) ileft = imid
            else if (target < get_mat(imid)) iright = imid
            else return true
        }
        return false
    }
}
