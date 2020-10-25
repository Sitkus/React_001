import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
`;

const Description = styled.article`
    padding: 5rem;
`;

const Title = styled.h1`
    font-size: 2.2rem;
`;

const Body = styled.p`
    font-size: 1.8rem;
`;

export { Header, Description, Title, Body };
