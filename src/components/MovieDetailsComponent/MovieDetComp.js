import { Description, Poster, SubtitleH2, SubtitleH3 } from "./MovieDetComp.styled";

const MovieDetailsComponent = ({ movieDetails }) => {
    const { original_title, genres, overview, poster_path, vote_average } =
    movieDetails || {};
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return(
    <>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          widrh={220}
          height={280}
          loading="lazy"
          alt="poster"
        />
        <div>
          <SubtitleH2>{original_title}</SubtitleH2>
          <SubtitleH3>User score: {scoreToFixed}%</SubtitleH3>
          <SubtitleH3>Overview</SubtitleH3>
          <Description>{overview} </Description>
          <SubtitleH3>Genres</SubtitleH3>
          <Description>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Description>
        </div>
        </>
  )
}

export default MovieDetailsComponent