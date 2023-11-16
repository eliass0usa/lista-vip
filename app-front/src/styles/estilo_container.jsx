import styled from "styled-components";

const ContainerEstilo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: ${props => props.start ? 'flex-start' : 'space-between'};
  flex-wrap: wrap;
  min-height: ${props => props.minHeight ? '90%' : 'auto'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
`;

export default ContainerEstilo;