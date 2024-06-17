import React, { useEffect, useState } from 'react'
import axios from "axios"

import DetailsBanner from '../../components/DetailsBanner/DetailsBanner'
import Cast from '../../components/cast/Cast'
import Similar from '../../components/similar/Similar'
import Recommendation from '../../components/recommendation/Recommendation'
import { useParams } from 'react-router-dom'
import css from './Details.module.scss'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { base_url, API_TOKEN, TMD_API } from '../../components/api/api';


function Details() {
    const [isLoadding, setIsLoadding] = useState(false);
    const [apiResponse,setApiResponse] = useState(null)
    const [crew,setCrew] = useState(null)
    const [cast,setCast] = useState(null)
    const { media_type, id } = useParams();

    const headers = {
        Authorization: "bearer " + API_TOKEN,
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoadding(true);
            const response = await axios.get(`${TMD_API}/${media_type}/${id}/credits`, { headers })
            if (response.status === 200) {
                setIsLoadding(false)
                setApiResponse(response.data)
                if(response.data!=''){
                     setCrew(response.data.crew)
                     setCast(response.data.cast)
                }

            } else {
                setIsLoadding(false)
            }
        }
        fetchData();
    }, [])
    return (
        <div className={css.wholeContainer}>
            <Navbar />
            <DetailsBanner crew={crew} id={id} />
            <Cast loading={isLoadding} cast={cast} />
            {/* <Recommendation id={id} />
            <Similar id={id} /> */}
            <Footer />
            {/* <Cast id={id} />
            
            // */}
            {/* <VideosSection data={data} loading={loading}/> */}

        </div>
    )
}

export default Details