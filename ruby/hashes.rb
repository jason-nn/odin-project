family = {
  uncles: %w[bob joe steve],
  sisters: %w[jane jill beth],
  brothers: %w[frank rob david],
  aunts: %w[mary sally susan],
}

p family.select { |k, v| k == :brothers || k == :sisters }.values.flatten
