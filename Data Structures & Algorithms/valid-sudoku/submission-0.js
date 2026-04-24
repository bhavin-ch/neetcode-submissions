class Solution {
    // 1,2,3 4,5,6 7,8,9
    //   0,1,2  3,4,5   6,7,8
    // 0
    // 1 0->00  1->01   2->02
    // 2

    // 3
    // 4 3->10  4->11   5->12
    // 5

    // 6
    // 7 6->20  7->21   8->22
    // 8
    quot = (x) => Math.floor(x/3)
    remd = (x) => x%3
    has_dups = (arr) => {
        const nums = arr.filter(x => x !== '.')
        return nums.length !== [...new Set(nums)].length
    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<9; i++) {
            // check ith row
            const ith_row = board[i]
            const ith_col = board.map(row => row[i])
            const box_x = this.remd(i)
            const box_y = this.quot(i)
            const ith_box = board
                .filter((_row, x) => (this.quot(x) === box_y))
                .map(col => col.filter((_cell, j) => this.quot(j) === box_x))
                .flat()
            if (this.has_dups(ith_row)) return false
            if (this.has_dups(ith_col)) return false
            if (this.has_dups(ith_box)) return false
        }
        return true
    }
}
