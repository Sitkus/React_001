import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #f9f9f9;
    padding: 5rem;
`;

const Logo = styled.div`
    font-size: 2.4rem;
`;

const NavLink = styled(Link)`
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

const List = styled.ul`
    display: flex;
    align-items: center;
`;

const ListItem = styled.li`
    margin-right: 2rem;

    &:last-child {
        margin-right: 0;
    }
`;

export { Nav, Logo, NavLink, List, ListItem };