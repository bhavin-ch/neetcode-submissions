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
        const nums = arr.filter(x => x !== '.').filter(x => !!x)
        const map = new Map()
        for (let i=0; i<nums.length; i++) {
            if (map.has(nums[i])) return true
            else map.set(nums[i], true)
        }
        return false
        // return nums.length !== [...new Set(nums)].length
    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku1(board) {
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
    isValidSudoku(board) {
       let rows = new Array(board.length).fill(null).map(() => new Set());
       let cols = new Array(board.length).fill(null).map(() => new Set());
       let boxes = {};
        for(let row = 0; row < board[0].length; row++) {
            for(let col = 0; col < board.length; col++) {
                let val = board[row][col];

                if(val === ".") continue;

                if(rows[row].has(val)) {
                    return false;
                } else {
                    rows[row].add(val);
                }

                if(cols[col].has(val)) {
                    return false;
                } else {
                    cols[col].add(val);
                }

                let boxKey = "" + Math.floor(row / 3) + Math.floor(col / 3);

                if(!boxes[boxKey]) {
                    boxes[boxKey] = new Set();
                }

                if(boxes[boxKey].has(val)) {
                    return false;
                } else {
                    boxes[boxKey].add(val);
                }
            }
        }
        return true;
    }

}
