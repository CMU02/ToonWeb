import { styled } from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Text = styled.span`
    color: #03cb5c;
    font-size: 50px;
    font-weight: 600;
`


export default function LoadingScreen() {
    return (
        <Wrapper>
            <Text>Loading....</Text>
        </Wrapper>
    )
}