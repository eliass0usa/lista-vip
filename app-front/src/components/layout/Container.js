import ContainerEstilo from '../../styles/estilo_container';

function Container({ customClass, children }) {
  return (
    <ContainerEstilo 
      start={customClass === 'start'} 
      minHeight={customClass === 'min-height'} 
      column={customClass === 'column'}
    >
      {children}
    </ContainerEstilo>
  );
}

export default Container;