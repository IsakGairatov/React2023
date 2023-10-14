import {Button, Card, Space} from "antd";
import React from "react";


const MangaGenres = (props) => {
    const {genre} = props;

    return (
      <p>{genre}</p>
    );
};

export default MangaGenres;