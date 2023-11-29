import styled from "styled-components";

const ContainerEstilo = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.start ? 'flex-start' : 'space-between'};
  flex-grow: 1;
  width: 100%;
  max-width: 75rem; 
  margin: 0 auto;
  padding: 0 1rem; 
  flex-wrap: wrap;
  min-height: ${props => props.minHeight ? '100vh' : 'auto'}; 

  @media (max-width: 600px) { 
    flex-direction: column;
    padding: 0 0.5rem; 
  }
`;

export default ContainerEstilo;