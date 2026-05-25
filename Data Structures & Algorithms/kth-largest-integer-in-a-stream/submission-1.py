from heapq import heappush, heapify, heappushpop, heappop

class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.q: List[int] = nums
        self.k = k
        heapify(self.q)
        while len(self.q) > k:
            heappop(self.q)

    def add(self, val: int) -> int:
        heappush(self.q, val)
        if len(self.q) > self.k:
            heappop(self.q)
        return self.q[0]