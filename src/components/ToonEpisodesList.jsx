import { useEffect } from "react";
import { useState } from "react"
import { styled } from "styled-components";
import { fetchDataApi } from "../router/Toons"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    width: 60%;
    margin: 0 auto;
`
const List = styled.div`
    display: flex;
    margin-top: 35px;
    gap: 15px;
    box-shadow: 0px 5px 25px gray;
    border-radius: 20px;
    h3 {
        font-size: 20px;
    }
    img {
        border-radius: 20px;
    }
`
const ListInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    p {
        margin-top: 10px;
    }
`


export default function ToonEpisodesList({param}) {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        async function Data() {
            const data = await fetchDataApi(`${param.id}/episodes`)
            setJsonData(data)
        }
        Data();
    }, [])
    return (
        <Wrapper>
            {
                jsonData.map((toon) => (
                    <List>
                        <img src={toon.thumb} alt={toon.title} />
                        <ListInfo>
                            <h3>{toon.title}</h3>
                            <p> ★ {toon.rating}</p>
                            <p>{toon.date}</p>
                        </ListInfo>
                    </List>
                ))
            }
        </Wrapper>
    )
}