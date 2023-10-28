import {Space} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";


const Hat = (x) => {
    const [isLog, setLog] = useState(parseInt(localStorage.getItem("isLog"), 10))

    function logout() {
        localStorage.setItem("isLog", "0")
        setLog(parseInt(localStorage.getItem("isLog"), 10))
    }

    return ( <Space direction="horizontal">
            <Link to={'/'}>Домой</Link>
        {!isLog ? (<Link to={'/signupin/1'}>Войти</Link>) : (<><Link to={'/mypage/'}>Моя страница</Link> <p onClick={logout}>Выйти</p> </>)}

        </Space>
    )
}

export default Hat;