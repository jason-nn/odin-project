def stock_picker(arr)
  prices = arr.combination(2).to_a.max { |a, b| a[1] - a[0] <=> b[1] - b[0] }
  [arr.index(prices[0]), arr.index(prices[1])]
end

p stock_picker([17, 3, 6, 9, 15, 8, 6, 1, 10])
p stock_picker([17, 3, 6, 9, 15, 8, 6, 1, 10]) == [1, 4]
