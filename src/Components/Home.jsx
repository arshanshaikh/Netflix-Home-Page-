import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"




const apiKey = "bc2e4314ae6c7542398488241c79c093";
const url = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopratedMovies] = useState([]);

  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      console.log(results);
      setUpcomingMovies(results);
    };

    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      console.log(results);
      setnowPlayingMovies(results);
    };
    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      console.log(results);
      setpopularMovies(results);
    };

    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      console.log(results);
      settopratedMovies(results);
    };

    fetchupcoming();
    fetchnowPlaying();
    fetchpopular();
    fetchtopRated();
    
  }, []);

  return (
    <section className="Home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[8]
            ? `url(${`${imgUrl}/${popularMovies[8].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[8] && <h1>{popularMovies[8].original_title}</h1>}

        {popularMovies[8] && <p>{popularMovies[8].overview}</p>}


        <div>
        <button><BiPlay/>Play</button>
        <button>My List<AiOutlinePlus/></button>
        </div>
      </div>

      <Row title={"Upcoming "} arr={upcomingMovies} />
      <Row title={"Now Playing "} arr={nowPlayingMovies} />
      <Row title={"Popular "} arr={popularMovies} />
      <Row title={"Top Rated "} arr={topRatedMovies} />
    </section>
  );
};

export default Home;
