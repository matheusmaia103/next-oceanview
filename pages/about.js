import Head from "next/head";
import Link from "next/link";
import GlobalStyle from "../styles/AboutStyle";
import { Typography, Divider, Box } from "@mui/material";

const about = () => {
  return (
    <div>
      <Head>
        <title>Sobre a oceanview</title>
        <meta name="description" content="O que a empresa Oceanview oferece" />
        <meta
          name="keywords"
          content="hoteis, passeios, viagem, turismo, lazer"
        />
      </Head>
      <GlobalStyle />

      <Box component="main" id="login">
        <Divider textAlign="center" className="divider">
          <Typography variant="h5">Quem somos nós</Typography>
        </Divider>

        <Box component="article">
          <Typography variant="body2">
            A Oceanview é uma empresa que te proporciona as melhores
            experiências de viagens.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default about;
