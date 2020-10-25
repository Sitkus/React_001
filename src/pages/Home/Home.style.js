import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 15rem 5rem;
  background-color: #f9f9f9;
`;

const Section = styled.section`
  flex: 0 0 50%;
  line-height: 1.6;
`;

const SectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export { Main, Section, SectionTitle };
