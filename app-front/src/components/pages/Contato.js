import React, { useState } from 'react';
import { TextField, Button, Typography, Box, InputAdornment, InputLabel } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    // TODO: Enviar os dados para o backend, fazer com o pessoal
  };

  return (
    <Box >
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
        <MailOutlineIcon fontSize="large" />
        <Typography variant="h5" component="h2">
          Fale Conosco
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Nome</InputLabel>
                  <PersonIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <TextField 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Email</InputLabel>
                  <MailOutlineIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <TextField 
          value={mensagem} 
          onChange={(e) => setMensagem(e.target.value)} 
          variant="outlined" 
          multiline 
          rows={4} 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Mensagem</InputLabel>
                  <MessageIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Box>
  );
}

export default Contato;