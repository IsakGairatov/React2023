import {Button, Card, Space} from "antd";
import React from "react";

import {MangaList} from "../../../Data/MockApi";
import {Link} from "react-router-dom";


const MangaCard = (props) => {
    const { id, name, img, author, artist, year, desc, genres } = props;

    return (
        <Card>
            <Space direction="horizontal">
            <p>{img}</p>
            <div>
                <h1>{name}</h1>
                <p>Сценарист: {author} <br/>
                Художник: {artist}</p>
                <p>год выпуска: {year}</p>
                <p>Жанры:</p>
                <Space direction="horizontal">
                    {genres.map((element) => (
                        <p>{element}</p>
                    ))}
                </Space>
                <p>Описание:</p>
                <p>{desc}</p>
            </div>
                <div>
                    <Link to={"/MangaPage/" + id}>
                        <Button>Подробнее</Button>
                    </Link>
                </div>
            </Space>
        </Card>
    );
};

export default MangaCard;