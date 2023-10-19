import React from "react";
import {MangaList} from "../Data/MockApi";
import MangaCard from "../MangaCard";

const MangaMain = () => {

    return ( <>
            {MangaList.map((element) => (
                <MangaCard
                    {...element}
                />
            ))}
    </>
    )
}

export default MangaMain;