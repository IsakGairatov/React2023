import {Button, Card, Space} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import MangaCard from "../MangaCard";
import {CharactersList, MangaList} from "../Data/MockApi";
import Character from "../MangaCard/character";



const MangaPage = () => {
    let {id} = useParams();


    return (
        <>
            <MangaCard {...MangaList[id - 1]}/>
            <Card>
                <h1><b>Персонажи:</b></h1>
                <Space direction="horizontal">
                    {CharactersList[id - 1].characters.map((elements) => (
                        <Character {...elements}/>
                        ))}
                </Space>
            </Card>
        </>
        );
};

export default MangaPage;