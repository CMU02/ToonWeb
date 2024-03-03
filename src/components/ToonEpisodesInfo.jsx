import { useEffect } from "react"
import { useState } from "react"
import { json } from "react-router-dom"
import { styled } from "styled-components"
import { fetchDataApi } from "../router/Toons"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    gap: 50px;
    width: 60%;
    margin: 0 auto;
    box-shadow: 0px 5px 25px gray;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
    h1 {
        font-size: 25px;
        font-weight: 600;
    }
    h4 {
        font-size: 17px;
    }
`
const Thumb = styled.img`
    width: 300px;
    height: 250px;

`



export default function ToonEpisodesInfo({param}) {
    const [jsonData, setJsonData] = useState([])
    useEffect(() => {
        async function Data() {
            const data = await fetchDataApi(`${param.id}`)
            setJsonData(data)
        }
        Data()
    }, [])
    return (
        <Wrapper>
            {
                jsonData.thumb == "" ? 
                    <Thumb src="https://via.placeholder.com/200/200" /> :
                    <Thumb src={jsonData.thumb} alt={jsonData.title} />
            }
            <Info>
                <h1>{jsonData.title}</h1>
                <h4>{jsonData.about}</h4>
                <p>{jsonData.genre}</p>
                <p>{jsonData.age}</p>
            </Info>
        </Wrapper>
    )
}