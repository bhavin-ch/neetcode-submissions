class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore.set(key, 
        [ ...(this.keyStore.get(key) ?? []), { t: timestamp, v: value } ])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const tvals = this.keyStore.get(key) ?? []
        const n = tvals.length
        if (n === 0) return ""
        let [l, r] = [0, n-1]
        while (l <= r) {
            console.log(l, r)
            const m = Math.floor((l+r)/2)
            if (timestamp === tvals[m].t) return tvals[m].v
            if (timestamp < tvals[m].t) r = m-1
            else l = m+1
        }
        return l > 0 ? tvals[l-1].v : ""
    }
}
