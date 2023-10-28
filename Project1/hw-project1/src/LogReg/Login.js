import {Card, Input, Space} from "antd";
import {Button} from "antd/lib";
import {Link, useNavigate} from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();
    const goToMainPage = () => navigate('/');

    function login() {
        if(localStorage.getItem("name") == document.getElementById("logName").value &
            localStorage.getItem("password") == document.getElementById("logPassword").value
        ) {
            localStorage.setItem("isLog", "1")
            goToMainPage()
        }
    }

    return ( <>
            <Card size={"small"}>
                <Space direction={"vertical"}>
                    <h>Войти в аккаунт</h>
                    <Input id={"logName"} type="text" placeholder={"Введите Имя"} style={{width: "370px"}}/>
                    <Input id={"logPassword"} idtype="password" placeholder={"Пороль"} style={{width: "370px"}}/>
                    <Button onClick={login}>Войти</Button> <Link to={'/signupin/2'}>зарегистрироваться</Link>
                </Space>
            </Card>


        </>
    )
}

export default Login;