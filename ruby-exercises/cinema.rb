class Cinema
  attr_accessor :name, :location
  attr_reader :movies

  def initialize(name, location)
    @name = name
    @location = location
    @movies = []
  end

  def add_movie(movie)
    @movies << movie
    movie.cinema = self
  end
end

class Movie
  attr_accessor :title, :showtime, :cinema

  @@all = []

  def initialize(title, showtime)
    @title = title
    @showtime = showtime
    @@all << self
  end

  def self.all
    @@all
  end
end

sm = Cinema.new('SM', 'Clark')
p sm

turning_red = Movie.new('Turning Red', '9:00 PM')
p turning_red

sm.add_movie(turning_red)
p sm
p turning_red
