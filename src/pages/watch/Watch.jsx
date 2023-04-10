

import { ArrowBackOutlined } from "@material-ui/icons";
import css from "./watch.module.scss";
import { Link } from "react-router-dom";

function Watch() {
  return (
    <div className={`${css.watch}`}>
      <Link to="/">
        <div className={`${css.back}`}>
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/f_vbAtFSEc0?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <video className={`${css.video}`}
        autoPlay
        progress
        controls>
        <source src="https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
}

export default Watch