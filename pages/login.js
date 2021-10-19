import Head from "next/head";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Facebook, Instagram, Google } from "@mui/icons-material";
import GlobalStyles from "../styles/loginPage";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <main id="loginPage">
        <Image
          src="/img/destinations/peru.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
          alt="background"
        />
        <GlobalStyles />
        <Box component="form">
          <Typography variant="h5" gutterBottom>
            Faça seu login
          </Typography>
          <TextField
            label="Email"
            color="primary"
            variant="outlined"
            placeholder="Digite seu email"
            className="textfield"
            type="email"
          />
          <TextField
            label="Senha"
            color="primary"
            variant="outlined"
            placeholder="Digite sua senha"
            className="textfield"
            type="password"
          />
          <Button color="primary" variant="contained">
            Confirmar
          </Button>

          <Divider textAlign="center" className="divider">
            <Typography variant="h6">Outros métodos de login</Typography>
          </Divider>
          <Box component="div" id="loginMethods">
            <Button
              startIcon={<Google color="inherit" />}
              color="inherit"
              className="btn"
              variant="contained"
            >
              <Typography component="span" variant="Button">
                Continuar com Google
              </Typography>
            </Button>
            <Button
              startIcon={<Facebook />}
              color="inherit"
              className="btn"
              variant="contained"
            >
              <Typography component="span" variant="Button">
                Continuar com Facebook
              </Typography>
            </Button>
            <Button
              startIcon={<Instagram color="seconday" />}
              color="inherit"
              className="btn"
              variant="contained"
            >
              <Typography component="span" variant="Button">
                Continuar com Instagram
              </Typography>
            </Button>
          </Box>
        </Box>
      </main>
    </>
  );
}
