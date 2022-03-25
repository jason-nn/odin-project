puts 'Enter your age: '
age = gets.chomp
[10, 20, 30, 40].each do |i|
  puts "In #{i} years you will be:"
  puts age.to_i + i
end
