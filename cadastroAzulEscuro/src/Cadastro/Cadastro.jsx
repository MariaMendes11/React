import * as React from "react";
import TextField from "@mui/material/TextField"; // Corrigido o nome
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
    name: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    alert(
      `Usuário cadastrado! "Nome: ${user.name}""Idade: ${user.age}""Email: ${user.email}""Senha: ${user.password}`
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ mt: 3, mb: 2, backgroundColor: "rgb(0, 0, 139)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vio
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal" 
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="age"
            label="Idade"
            name="age"
            margin="normal"
            value={user.age}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "rgb(0, 0, 139)" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
