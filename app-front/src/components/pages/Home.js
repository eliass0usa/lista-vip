import * as React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Home() {
  const festas = [
    { nome: 'Festa 1', local: 'Local 1', horario: 'Horário 1' },
    { nome: 'Festa 2', local: 'Local 2', horario: 'Horário 2' },
  ];

  return (
    <Container
      sx={{
        marginTop: 2,
        backgroundColor: '#fff',
        padding: 2,
        boxShadow: 1,
        borderRadius: 1,
        alignItems: 'flex-start'

      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
      <CelebrationIcon/> Lista de Festas:
      </Typography>
      <Divider sx={{ marginBottom: 3, width: '100%' }} />
      {festas.map((festa, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {festa.nome}
            </Typography>
            <Typography color="text.secondary">
              Local: {festa.local}
            </Typography>
            <Typography color="text.secondary">
              Horário: {festa.horario}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to ="/form">Entrar na Lista VIP</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default Home;