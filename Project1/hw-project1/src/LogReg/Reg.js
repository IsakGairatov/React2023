import {Card, Input, Space} from "antd";
import {Button} from "antd/lib";
import {Users} from "../Data/MockApi";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Regin = () => {
    const navigate = useNavigate();
    const GoToLogPage = () => navigate('/signupin/1')

    function reg() {
        if(document.getElementById("regName").value != "" && document.getElementById("regPassword").value != "") {
            localStorage.setItem("name", document.getElementById("regName").value)
            localStorage.setItem("password", document.getElementById("regPassword").value)
            GoToLogPage()
        }

        }

    return ( <>
            <Card size={"small"}>
                <Space direction={"vertical"}>
                    <h>Регистрация</h>
                    <Input id={"regName"} type="text" placeholder={"Введите Имя"} style={{width: "370px"}}/>
                    <Input id={"regPassword"} type="password" placeholder={"Пороль"} style={{width: "370px"}}/>
                    <Button onClick={reg}>Сохранить</Button> <Link to={'/signupin/1'}>Войти</Link>
                </Space>
            </Card>
        </>
    )
}

export default Regin;