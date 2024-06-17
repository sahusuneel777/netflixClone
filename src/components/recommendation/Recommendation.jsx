import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import axios from "axios"
import { API_TOKEN as token, TMD_API as tmd } from '../../components/api/api'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from "./recommendation.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const API_TOKEN = token
const TMD_API = tmd
const mediaType = '/movie'
const base_url = "https://image.tmdb.org/t/p/original"

function Recommendation(props) {
  const [recommendations, setRecommedations] = useState(null)

  const headers = {
    Authorization: "bearer " + API_TOKEN,
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${TMD_API}${mediaType}/${props.id}/recommendations`, { headers })
      console.log("recomendtaion", response)
      if (response.status === 200) {
        setRecommedations(response.data.results)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div>Recommendation</div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}>
        {/* {recommendations != null && recommendations.map(recommendation => {
          return (
            <div key={recommendation.id}>
              <img className={css.image} src={`${base_url}${recommendation.poster_path}`} />
              <p>{recommendation.title}</p>
            </div>
          )
        })} */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </>
  )
}

export default Recommendation