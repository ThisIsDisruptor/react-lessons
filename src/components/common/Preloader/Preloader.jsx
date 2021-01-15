import React from "react";

import preloaderGif from "../../assets/images/loading.gif";

const Preloader = (props) => {
  return (
    <div>{props.isFetching ? <img src={preloaderGif} alt="" /> : null}</div>
  );
};

export default Preloader;
