dictionary = %w[
  below
  down
  go
  going
  horn
  how
  howdy
  it
  i
  low
  own
  part
  partner
  sit
]

def substrings(text, dictionary)
  dictionary.reduce(Hash.new(0)) do |hash, value|
    occurences = text.downcase.scan(value).length
    hash[value] = occurences if occurences > 0
    hash
  end
end

p substrings('below', dictionary) == { 'below' => 1, 'low' => 1 }

p substrings("Howdy partner, sit down! How's it going?", dictionary) == {
    'down' => 1,
    'go' => 1,
    'going' => 1,
    'how' => 2,
    'howdy' => 1,
    'it' => 2,
    'i' => 3,
    'own' => 1,
    'part' => 1,
    'partner' => 1,
    'sit' => 1,
  }
