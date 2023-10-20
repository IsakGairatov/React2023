import {MangaList} from "../Data/MockApi.js";
import MangaCard from "../MangaCard";
import React from "react";
import {Link, useParams} from "react-router-dom";
import {Genres} from "../Data/MockApi.js";
import Hat from "../MainPage/Hat";

const GenreList = () => {
    let {id} = useParams();
    return ( <>
            <Hat/>
            {MangaList.filter((ml) => ml.genres.includes(Genres.find((g) => g.id==id).genre)).map((element) => (
                <MangaCard
                    {...element}
                />
            ))}
        </>
    )
}

export default GenreList;