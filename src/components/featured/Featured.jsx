import { useEffect, useState } from 'react'
import './featured.css'
import axios from 'axios'
import {api} from '../api/api'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Link } from 'react-router-dom';
const TMD_API = "https://api.themoviedb.org/3"


function Featured() {
    const [featuredMovie, setfeaturedMovie] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${TMD_API}${api.fetchNetflixOriginals}`)
            setfeaturedMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
        }
        fetchData()
    }, [])

    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (

        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {featuredMovie?.title || featuredMovie?.name || featuredMovie?.originam_name}
                </h1>
                <h1 className="banner-description">{truncate(featuredMovie?.overview, 150)}</h1>
                <div className="banner-buttons">
                    <Link style={{textDecoration:'none'}} to="/watch"><div className="banner-button"><PlayArrow />  Play</div></Link>
                    <div className="banner-button"><InfoOutlined />  Info</div>
                </div>
            </div>
        </header>
    )


}

export default Featured