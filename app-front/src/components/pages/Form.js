import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  Select,
  MenuItem,
  InputAdornment,
  FormHelperText,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Phone,
  Event,
  Check,
  CheckBoxOutlineBlankTwoTone,
} from "@mui/icons-material";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LiquorSharpIcon from "@mui/icons-material/LiquorSharp";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { enviarDadosParaBanco } from "../../backend/services/api";

// app-front\src\backend\server.js

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Enviar dados para o banco de dados
      const respostaDoBanco = await enviarDadosParaBanco(data);
      console.log("Resposta do banco:", respostaDoBanco);

      // Exibir o alerta de sucesso
      setMostrarAlerta(true);
    } catch (error) {
      console.error("Erro ao enviar dados para o banco de dados:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#fff",
        padding: 2,
        boxShadow: 1,
        borderRadius: 1,
        marginTop: 1,
        alignItems: "flex-start",
      }}
    >
      {mostrarAlerta && (
        <Alert severity="success">Cadastro realizado com sucesso!</Alert>
      )}

      <Typography variant="h4" component="h1" gutterBottom={1}>
        <ListAltRoundedIcon /> Formulário de Cadastro na Lista VIP
      </Typography>

      <Divider sx={{ marginBottom: 3, width: "100%" }} />
      <TextField
        label="Nome"
        variant="filled"
        placeholder="Digite seu nome"
        {...register("nome", { required: "Nome é obrigatório" })}
        error={Boolean(errors.nome)}
        helperText={errors.nome?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="E-mail"
        variant="filled"
        type="email"
        {...register("email", { required: "E-mail é obrigatório" })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Telefone"
        variant="filled"
        {...register("telefone", { required: "Telefone é obrigatório" })}
        error={Boolean(errors.telefone)}
        helperText={errors.telefone?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Data de Nascimento"
        variant="filled"
        type="date"
        InputLabelProps={{ shrink: true }}
        {...register("dataNascimento", {
          required: "Data de nascimento é obrigatória",
        })}
        error={Boolean(errors.dataFesta)}
        helperText={errors.dataFesta?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Event />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="CPF"
        variant="filled"
        InputLabelProps={{ shrink: true }}
        {...register("cpf", { required: "CPF é obrigatório" })}
        error={Boolean(errors.cpf)}
        helperText={errors.dataFesta?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockPersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ marginBottom: 3, width: "100%" }} />

      <Typography variant="h6" component="h2" gutterBottom>
        <InfoRoundedIcon /> Informações da Festa
      </Typography>

      <FormControl
        variant="filled"
        error={Boolean(errors.numeroFesta)}
        fullWidth
      >
        <InputLabel>Número da Festa</InputLabel>
        <Select
          {...register("numeroFesta", {
            required: "Número da festa é obrigatório",
          })}
          sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
          startAdornment={
            <InputAdornment position="start">
              <LiquorSharpIcon />
            </InputAdornment>
          }
        >
          <MenuItem value={1}>Festa 1</MenuItem>
          <MenuItem value={2}>Festa 2</MenuItem>
        </Select>
        {errors.numeroFesta && (
          <FormHelperText>{errors.numeroFesta.message}</FormHelperText>
        )}
      </FormControl>

      <TextField
        label="Data da Festa"
        variant="filled"
        type="date"
        InputLabelProps={{ shrink: true }}
        {...register("dataFesta", { required: "Data da festa é obrigatória" })}
        error={Boolean(errors.dataFesta)}
        helperText={errors.dataFesta?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Event />
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{ borderRadius: "10px", border: "1px solid grey", padding: "10px" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankTwoTone />}
              checkedIcon={<Check />}
              {...register("jaECliente")}
            />
          }
          label="Já é cliente?"
        />
      </Box>

      <Divider sx={{ marginBottom: 3, width: "100%" }} />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<LocalActivityOutlinedIcon />}
      >
        Cadastrar Reserva
      </Button>
    </Box>
  );
};

export default Form;
