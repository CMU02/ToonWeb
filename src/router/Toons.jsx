import { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import Toon from "../components/Toon";

export const API_URL = "https://webtoon-crawler.nomadcoders.workers.dev";
export const fetchDataApi = async(link) => {
    try {
        const response = await fetch(`${API_URL}/${link}`);
        if (!response.ok) {
            throw new Error("Faild to fetch Data")
        }

        const data = response.json();
        return data;
    } catch(error) {
        console.log('Faild to fetch data')
        throw error;
    }
};

const Container = styled.div`
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    h1 {
        font-size: 55px;
        font-weight: 600;
        color: #03cb5c;
    }
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 35px;
    max-width: 80%;
    width: 100%;
    margin: 45px auto;
`
const Line = styled.hr`

`

export default function Toons() {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataApi('today')
            setJsonData(data)
        }
        fetchData();
    }, [])

    return (
        <Container>
            <Title>
                <h1>Today's Toons</h1>
            </Title>
            <Line />
            <Wrapper>
                {
                    jsonData && jsonData.map((toon) => (
                        <Toon 
                        key={toon.id}
                        id={toon.id}
                        title={toon.title}
                        thumb={toon.thumb}
                        />
                    ))
                }
            </Wrapper>
        </Container>
    );
}