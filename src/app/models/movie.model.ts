export interface movie {
  adult: boolean,
  backdrop_path: string,
  budget: 205000000
  genres: genre[]
  homepage: string,
  id: number,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date: Date,
  runtime: number
  tagline: string,
  title: string,
  vote_average: 7.6
}

export interface genre {
  id: number,
  name: string
}

export interface cast {
  cast_id: number,
  character: string,
  credit_id: string,
  gender: number,
  id: number,
  name: string,
  order: number,
  profile_path: string,
}

export interface crew {
  credit_id: string,
  department: string,
  job: string,
  name: string,
  profile_path: string
}

export interface responseCasts {
  cast: cast[],
  crew: crew[],
}