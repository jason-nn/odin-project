def bubble_sort(nums)
  is_sorted = false
  iterations = 0

  while is_sorted == false
    changes = 0

    nums.each_with_index do |value, index|
      if index < nums.length - 1 - iterations
        if nums[index] > nums[index + 1]
          nums[index], nums[index + 1] = nums[index + 1], nums[index]
          changes += 1
        end
      end
    end

    iterations += 1
    is_sorted = true if changes == 0
  end

  nums
end

p bubble_sort([90, 4, 3, 78, 2, 0, 2, 1])
