import React, {useState} from "react";
import {MangaList} from "../Data/MockApi.js";
import MangaCard from "../MangaCard";
import Hat from "./Hat";
import {Space} from "antd";

const MangaMain = () => {
    const [mangas, setMangas] = useState(MangaList);
    const search = (event) => {
        var text = event.target.value
        setMangas(MangaList.filter((m) => (
            m.name.match(text) || m.artist.match(text) || m.author.match(text) || m.year.match(text) || m.desc.match(text)
        )))
    };




    return ( <>
            <Space direction={"vertical"}>
                <Hat/>
                <input placeholder="Название манги" onChange={search} size={100}/>
            </Space>

            {mangas.map((element) => (
                <MangaCard
                    {...element}
                />
            ))}
    </>
    )
}

export default MangaMain;