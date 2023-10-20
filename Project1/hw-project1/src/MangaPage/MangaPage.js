import {Card, Space} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import MangaCard from "../MangaCard";
import {CharactersList, MangaList} from "../Data/MockApi.js";
import Character from "../MangaCard/character";
import Hat from "../MainPage/Hat";



const MangaPage = () => {
    let {id} = useParams();


    return (
        <>  <Hat/>
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