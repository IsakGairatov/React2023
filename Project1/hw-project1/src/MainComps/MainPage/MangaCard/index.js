import {Button, Card, Space} from "antd";
import React from "react";
import MangaGenres from "./genres";
import {MangaList} from "../../../Data/MockApi";


const MangaCard = (props) => {
    const { id, name, img, author, artist, year, desc, genres } = props;

    return (
        <Card>
            <p>{img}</p>
            <p>{id}</p>
            <h1>{name}</h1>
            <h2>{author}</h2>
            <h2>{artist}</h2>
            <p>{year}</p>

            <Space direction="horizontal">
                {genres.map((element) => (
                    <MangaGenres
                        {...element}
                    />
                ))}
            </Space>

            <p>desc</p>

        </Card>
    );
};

export default MangaCard;