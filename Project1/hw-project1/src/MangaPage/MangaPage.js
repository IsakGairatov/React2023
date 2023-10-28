import {Card, Space} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import MangaCard from "../MangaCard";
import {CharactersList, MangaList} from "../Data/MockApi.js";
import Character from "../MangaCard/character";
import Hat from "../MainPage/Hat";



const MangaPage = () => {
    let {id} = useParams();

    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) =>
        ([n , `C:\\Users\\Gayrat\\Desktop\\programming\\5semester\\React2023\\Project1\\hw-project1\\src\\Data\\Chapters\\${1}"\\${n}.pdf`.toString()]))

    list = list.map((el) => (
        [el[0], require("C:\\Users\\Gayrat\\Desktop\\programming\\5semester\\React2023\\Project1\\hw-project1\\src\\Data\\Chapters\\1\\1.pdf")]
    ))

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

                <br/>
                <Space direction={"vertical"}>
                    <h1>Главы:</h1>
                    {list.map((el) =>
                        (<a href={el[1]} download>Скачать главу {el[0]}</a>))}
                </Space>

            </Card>
        </>
        );
};

export default MangaPage;