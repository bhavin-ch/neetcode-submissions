last = (arr) => arr[arr.length - 1]
class MinStack {
    constructor() {
        this.mins = []
        this.stack = []
    }
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.mins.length === 0) {
            this.mins.push(val)
        } else {
            this.mins.push(Math.min(val, last(this.mins)))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.mins.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return last(this.stack)
    }

    /**
     * @return {number}
     */
    getMin() {
        return last(this.mins)
    }
}
