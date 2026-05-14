class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        left, right = 0, n-1
        if nums[left] == target:
            print(f"found target at index {left}")
            return left
        if nums[right] == target:
            print(f"found target at index {right}")
            return right
        while left < right:
            if nums[left] == target:
                print(f"found target at index {left}")
                return left
            if nums[right] == target:
                print(f"found target at index {right}")
                return right
            mid = (left + right) // 2
            if nums[mid] == target:
                print(f"found target at index {mid}")
                return mid
            if nums[mid] > target:
                print(f"closing in from the right")
                right = mid - 1
            else:
                print(f"closing in from the left")
                left = mid + 1
        return -1