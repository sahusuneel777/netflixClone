import React, { useEffect, useState } from 'react'
import axios from "axios";
import { base_url, API_TOKEN, TMD_API } from '../api/api';
import { useParams } from 'react-router-dom';
import css from './cast.module.scss'

function Cast(props) {
  const { media_type, id } = useParams();
  const [cast, setCast] = useState(props.cast);
  const [response, setResponse] = useState()
  const [isLoadding, setIsLoadding] = useState(false)

  useEffect(() => {
    if (props) {

    }
  }, [])

  function skeletonBody() {
    return (
      <div className={css.skItem}>
        <div className={css.circleSkeleton}></div>
        <div className={css.rowSkeleton}></div>
        <div className={css.row2Skeleton}></div>
      </div>
    )
  }
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.sectionHeading}>Top Cast</div>
        {isLoadding ? <div className={css.castSkeleton}>
          {skeletonBody()}
          {skeletonBody()}
          {skeletonBody()}
          {skeletonBody()}
          {skeletonBody()}
          {skeletonBody()}
        </div> : <div className={css.listItems}>
          {cast != null && cast.map(each => {
            return (
              <div className={css.listItem}>
                <img src={`${base_url}${each.profile_path!=undefined ? each.profile_path : null}`}
                  // onClick={() => navigate(`/${movie.media_type}/${movie.id}`)}
                  className={css.profileImg}
                  alt={each.original_name}
                  key={each.id} />
                <span className={css.castName}>{each.name}</span>
                <span className={css.castoriginalName}>{each.original_name}</span>
              </div>
            )
          })}
        </div>}
      </div>
    </div>

  )
}

export default Cast