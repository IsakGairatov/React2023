import {MangaList} from "../Data/MockApi";
import MangaCard from "../MangaCard";
import React from "react";
import {useParams} from "react-router-dom";
import {Genres} from "../Data/MockApi";

const GenreList = () => {
    let {id} = useParams();
    return ( <>
            {MangaList.filter((ml) => ml.genres.includes(Genres.find((g) => g.id==id).genre)).map((element) => (
                <MangaCard
                    {...element}
                />
            ))}
        </>
    )
}

export default GenreList;