import axios from "axios"
import { useEffect, useRef, useState } from "react"

import css from './category.module.scss'
import { Add, ArrowBackIosOutlined,Facebook,Twitter,Instagram,LinkedIn, ArrowForwardIosOutlined, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { Link, useNavigate } from "react-router-dom"
const TMD_API = "https://api.themoviedb.org/3"
const base_url = "https://image.tmdb.org/t/p/original"
// const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWFlYzlhNTQ5NDBhYWFjNGEzODJmMDg1MmYzNjE1NSIsInN1YiI6IjY0MzJiMjA1MzEwMzI1MDEyNjk3YTVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-uOWyHUK35ARNZIdITRprT2lCL9H3NX55cM_xKa05I'
// const mediaType = 'movie'
function CategoryItem(props) {
    const [moviesList, setMoviesList] = useState([])
    const [isHovered, setIsHovered] = useState(false);
    const [isRightMoved, setIsRightMoved] = useState(false)
    const [isLeftMoved, setIsLeftMoved] = useState(false)
    const navigate = useNavigate();


    // const headers = {
    //     Authorization: "bearer " + API_TOKEN,
    // }

    const listRef = useRef();
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${TMD_API}${props.fetchUrl}`)
            // console.log("12", response)
            if (response.status === 200) {
                setMoviesList(response.data.results)
            }
        }
        fetchData();
    }, [])

    function handleClick(direction) {
        setIsRightMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction == "right") {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        if (direction == "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        // const container = listRef.current;

        // const scrollAmount =
        //     direction === "left"
        //         ? container.scrollLeft - (container.offsetWidth + 20)
        //         : container.scrollLeft + (container.offsetWidth + 20);

        // container.scrollTo({
        //     left: scrollAmount,
        //     behavior: "smooth",
        // });
    }

    function handleAddToFav(movie) {
        let favMovies = localStorage.getItem("favMovies") || []
        if (typeof favMovies == "string") {
            favMovies = JSON.parse(favMovies)
        }
        // console.log("31", typeof favMovies, favMovies);
        let duplicateMovies = []
        if (favMovies.length > 0) {
            duplicateMovies = favMovies.filter(eachMovie => eachMovie.id == movie.id)
        }
        // console.log("33", duplicateMovies)
        if (duplicateMovies.length > 0) {
            alert("This movie is already added to your list, Head over to My List to watch this movie.")
        } else {
            favMovies.push(movie)
            // console.log("47",favMovies);
        }
        localStorage.setItem("favMovies", JSON.stringify(favMovies))

    }

    return (
        <div className={`${css.container}`}>
            <h1 className={`${css.categoryTitle}`}>{props.title}</h1>
            <div className={`${css.wrapper}`}>
                <ArrowBackIosOutlined
                    className={`${css.sliderArrow} ${css.left}`}
                    onClick={() => handleClick("left")}
                    style={{ display: !isRightMoved && "none", cursor: 'pointer' }}
                />
                <div ref={listRef} className={`${css.posters}`}>

                    {moviesList.map((movie) => {
                        return <div onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} className={props.isLargeCategory ? `${css.posterLargeImage}` : `${css.posterLargeImage}`}>
                            <img src={`${base_url}${props.isLargeCategory ? movie.poster_path : movie.backdrop_path}`}
                                onClick={() => navigate(`/${movie.media_type}/${movie.id}`)}
                                alt={movie.name}
                                key={movie.id} />
                            {isHovered && <>
                                {/* <video src={trailer} autoPlay={true} loop /> */}
                                <div className={`${css.itemInfo}`}>
                                    <div className={`${css.icons}`}>
                                        <Link to="/watch"><PlayArrow className={`${css.icon}`} /></Link>
                                        <Add className={`${css.icon}`} onClick={() => handleAddToFav(movie)} />
                                        <ThumbUpAltOutlined className={`${css.icon}`} />
                                        <ThumbDownOutlined className={`${css.icon}`} />
                                    </div>
                                    <div className={`${css.itemInfoTop}`}>
                                        <span>1 hour 14 mins</span>
                                        <span className={`${css.limit}`}>+16</span>
                                        <span>{movie.release_date && movie.release_date.split("-")[0]}</span>
                                    </div>
                                    <div className={`${css.desc}`}>
                                        {movie.overview.length > 100 ? movie.overview.slice(0, 100) + "..." : movie.overview}
                                    </div>
                                    <div className={`${css.genre}`}>{props.title}</div>
                                </div>
                            </>}
                        </div>
                    })}

                </div>
                <ArrowForwardIosOutlined
                    className={`${css.sliderArrow} ${css.right}`}
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}

export default CategoryItem