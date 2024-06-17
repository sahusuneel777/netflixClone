import React, { useEffect, useState } from 'react'
import axios from "axios"
import css from "./detailsBanner.module.scss"
import PosterFallback from '../../assets/no-poster.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const TMD_API = "https://api.themoviedb.org/3"
const base_url = "https://image.tmdb.org/t/p/original"
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWFlYzlhNTQ5NDBhYWFjNGEzODJmMDg1MmYzNjE1NSIsInN1YiI6IjY0MzJiMjA1MzEwMzI1MDEyNjk3YTVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-uOWyHUK35ARNZIdITRprT2lCL9H3NX55cM_xKa05I'
const mediaType = '/movie'


function DetailsBanner(props) {
    const [movieDetails, setMoviesDetails] = useState(null)
    const [crew, setCrew] = useState(props.crew)
    const [director, setDirector] = useState(null)
    const [writer, setWriter] = useState(null)

    useEffect(() => {
        fetchData();
        const director = props.crew && props.crew.filter((crew) => crew?.job === "Director")
        const writer = props.crew && props.crew?.filter((crew) => crew?.job === "Screenplay" || crew?.job === "Story" || crew?.job === "Writer")

        setWriter(writer)
        setDirector(director)
    }, [])

    async function fetchData() {
        const response = await axios.get(`${TMD_API}${mediaType}/${props.id}`, { headers })
        // console.log("19", response)
        if (response.status === 200) {
            setMoviesDetails(response.data)
        }
    }



    const headers = {
        Authorization: "bearer " + API_TOKEN,
    }

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    // console.log(director, writer);


    return (
        <div className={css.wrapper}>
            <div className={`${css.container}`}>


                {movieDetails !== null && movieDetails.poster_path ? <img src={base_url + movieDetails?.poster_path} /> :
                    <img
                        className="posterImg"
                        src={PosterFallback}
                    />}

                <div className={css.description}>
                    <div className={css.aboutMovie}>
                        <div className={`${css.title}`}>{movieDetails?.original_title}</div>
                        <div className={css.tagLine}>{movieDetails?.tagline}</div>
                        <div className={css.genres}>
                            {movieDetails?.genres.map(eachGenre => <div className={css.genre}>
                                {eachGenre.name}
                            </div>)}
                        </div>
                    </div>
                    <div className={css.overView}>
                        <h1>Overview</h1>
                        <div className={css.overviewDescription}>{movieDetails?.overview}</div>
                        <div className={css.overviewDetails}>
                            <div className={css.crewInfo}>
                                <span className={`${css.text} ${css.bold}`}>
                                    Directors:{" "}
                                </span>
                                <span className={css.text}>{movieDetails?.status}</span>
                            </div>
                            <div className={css.crewInfo}>
                                <span className={`${css.text} ${css.bold}`}>
                                Release Date:{" "}
                                </span>
                                <span className={css.text}>{movieDetails?.release_date}</span>
                            </div>
                            <div className={css.crewInfo}>
                                <span className={`${css.text} ${css.bold}`}>
                                Duration:{" "}
                                </span>
                                <span className={css.text}>{toHoursAndMinutes(movieDetails?.runtime)}</span>
                            </div>

                            {/* <p>Status: {movieDetails?.status}</p>
                            <p>Release Date: {movieDetails?.}</p>
                            <p>Duration: {toHoursAndMinutes(movieDetails?.runtime)}</p> */}
                        </div>
                        {/* <div className={css.overviewDetails}>
                            <span>
                                <span className={`${css.text}` `${css.bold}`}>Status:{" "}</span>
                                <span>{movieDetails?.status}</span>
                            </span>
                            <span>
                                <span className={`${css.text}` `${css.bold}`}>Release Date:{" "}</span>
                                <span>{movieDetails?.release_date}</span>
                            </span>
                            <span>
                                <span className={`${css.text}` `${css.bold}`}>Duration:{" "}</span>
                                <span>{toHoursAndMinutes(movieDetails?.runtime)}</span>
                            </span>
                        </div> */}
                    </div>

                    <div className={css.crew}>
                        <div className={css.crewInfo}>
                            <span className={`${css.text} ${css.bold}`}>
                                Directors:{" "}
                            </span>
                            {director?.map((d, i) => (
                                <span className={css.text}>{d.name}</span>
                            ))}
                        </div>

                        <div className={css.crewInfo}>
                            <span className={`${css.text} ${css.bold}`}>
                                Writers:{" "}
                            </span>
                            {writer?.map((w, i) => (
                                <span className={css.text}>{w.name}</span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className={css.backdropImg}>
                    <img src={base_url + movieDetails?.backdrop_path} />
                </div>
                <div className={css.opacityLayer}></div>
            </div>


        </div>
    )
}

export default DetailsBanner