def caesar_offset(letter, offset)
  code_point = letter.ord + offset
  letter.match(/[a-z]/) ? max = 122 : max = 90
  code_point -= 26 while code_point > max
  code_point.chr
end

def caesar_cipher(text, offset)
  text
    .split('')
    .map { |i| i.match(/[a-zA-Z]/) ? caesar_offset(i, offset) : i }
    .join
end

p caesar_cipher('What a string!', 5)
p caesar_cipher('What a string!', 5) == 'Bmfy f xywnsl!'
