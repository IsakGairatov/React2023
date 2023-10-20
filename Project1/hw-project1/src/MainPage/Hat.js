import {Space} from "antd";
import {Link} from "react-router-dom";

const Hat = () => {
    return ( <Space direction="horizontal">
            <Link to={'/'}>Домой</Link>
            <Link to={'/mypage/'}>Моя страница</Link>
        </Space>
    )
}

export default Hat;