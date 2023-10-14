import {Button, Card, Space} from "antd";
import React from "react";
import {useParams} from "react-router-dom";


const MangaPage = () => {
    let {id} = useParams();
    return (
        <p>{id}</p>
    );
};

export default MangaPage;