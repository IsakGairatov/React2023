const MyPage = () => {
    const name = localStorage.getItem("name");
    return (
        <div>
            <h1>Ваше Имя: {name}</h1>
        </div>

    )
}

export default MyPage;