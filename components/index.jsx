//import GlobalStyle from "./style.js";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TextField, Button, IconButton } from "@material-ui/core/";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  MenuRounded,
  ArrowForward,
} from "@material-ui/icons";
import GlobalStyles from "../styles/Layout";
import Drawer from "./drawer";

//AOS Animations On Scoll
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <GlobalStyles />

      <nav>
        <Link href="/">
          <Button variant="text" color="inherit">
            Oceanview
          </Button>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <Button variant="text" color="inherit">
                Serviços
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button variant="text" color="inherit">
                Sobre
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <Button variant="outlined" color="inherit">
                login
              </Button>
            </Link>
          </li>
        </ul>

        <Button color="inherit" id="hamburguer" onClick={() => setOpen(true)}>
          <MenuRounded />
        </Button>
      </nav>
      <Drawer open={open} setOpen={setOpen}>
        links
      </Drawer>

      {children}

      <footer>
        <div id="mail">
          Deseja receber ofertas de hotéis exclusivas? Assine a nossa
          newsletter!
          <div>
            <TextField
              label="Digite seu email"
              variant="filled"
              color="primary"
              className="input"
            ></TextField>
            <IconButton variant="outlined" color="secondary" className="btn">
              <ArrowForward />
            </IconButton>
          </div>
        </div>
        <hr />
        <div id="social">
          Siga-nos nas redes sociais:
          <div id="btns">
            <IconButton color="secondary">
              <Facebook></Facebook>
            </IconButton>
            <IconButton color="secondary">
              <LinkedIn></LinkedIn>
            </IconButton>
            <IconButton color="secondary">
              <Instagram></Instagram>
            </IconButton>
            <IconButton color="secondary">
              <Twitter></Twitter>
            </IconButton>
          </div>
        </div>
        <Image
          src="/img/logo/logo2.jpg"
          width="200px"
          height="200px"
          alt="logo"
        />
      </footer>
    </>
  );
}
