import {Space} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";

const Hat = () => {
    const [x, setx] = useState(1)


    return ( <Space direction="horizontal">
            <Link to={'/'}>Домой</Link>
        {x ? (<Link to={'/signupin/1'}>Войти</Link>) : (<><Link to={'/mypage/'}>Моя страница</Link> <p onClick={Set(!x)}>Выйти</p> </>)}

        </Space>
    )
}

export default Hat;