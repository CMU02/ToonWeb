import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { API_URL } from "../router/Toons";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 30px;
    cursor: pointer;
    place-items: center;
    a {
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: black;
    }
`
const Image = styled.img`
    max-width: 100%;
    min-height: 100%;
    border-radius: 15%;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.65;
    &:hover {
        opacity: 1;
    }
`

export default function Toon({id, title, thumb}) {
    return (
        <Wrapper key={id}>
            <Image src={thumb} alt={title}/>
            <Link to={`${API_URL}/${id}`}>{title}</Link>
        </Wrapper>
    )
}