import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background-color: gray;
  color: ${props => props.primaryColor ? 'white' : 'black'};
`;

  // Extending style
const ShowcaseSection = styled(Section)`
  border: 1px solid black;
`;

export { Section, ShowcaseSection };
