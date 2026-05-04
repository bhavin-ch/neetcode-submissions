class MinStack {
    constructor() {
        this.min = Infinity
        this.minIndex = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (val < this.min) {
            this.min = val
            this.minIndex.push(this.stack.length - 1)
            console.log(this.minIndex)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const idx = this.stack.length - 1
        console.log(idx)
        console.log(this.minIndex[this.minIndex.length - 1])
        if (this.minIndex[this.minIndex.length - 1] === idx) {
            this.minIndex.pop()
            this.min = this.minIndex.length > 0 ? this.stack[this.minIndex[this.minIndex.length - 1]] : Infinity
        }
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
