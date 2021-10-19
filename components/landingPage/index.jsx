import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button, Typography, Box } from "@material-ui/core";
import GlobalStyles from "./style";
import {
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMoreRounded } from "@material-ui/icons";

//Card
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { esquiar, mergulho, trilha, cityTour } from "./images";

export default function LandingPage() {
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 0})
  }, []);

  return (
    <article>
      <GlobalStyles />

      <Box component="header">
        <Typography color="inherit" variant="h4">
          Faça a viagem dos seus sonhos
        </Typography>
        <Typography color="inherit" variant="h5">
          de maneira fácil e segura com a Oceanview
        </Typography>
        <br />

        <Button color="primary" variant="contained">
          Confira nossas ofertas
        </Button>
      </Box>
      <main>
        <Divider className="divider" textAlign="center">
          <Typography gutterBottom variant="h5" color="inherit">
            Nossos serviços
          </Typography>
        </Divider>
        <section className="infos bgMove">
          <div className="text" data-aos='fade-right'>
            <Typography gutterBottom variant="h6">
              Hospedagem
            </Typography>
            <br />
            Contamos com uma rede ampla de hotéis em todo o mundo prontos para
            te atender. Com as melhores localizações e melhor custo-benefício.
            Todos os nossos hotéis parceiros possuem excelentes avaliações. Não
            se preocupe, sua segurança estará garantida conosoco!
          </div>
          <div className="text" data-aos='fade-left'>
            <Typography variant="h6">Passeios</Typography>
            <br />
            Com uma grande variedade de passeios, a Ocean View fará sua viagem
            se tornar inesquecível! Nossos passeios possuem ótimas avaliações e
            um atendimento especial para você. Aproveite seu passeio com
            segurança e tranquilidade. Temos profissionais experientes para
            garantir sua satisfação.
          </div>
        </section>

        <Divider className="divider" textAlign="center">
          <Typography gutterBottom variant="h5">
            Galeria
          </Typography>
        </Divider>
        <br />
        <section id="destinations" className="examples">
          <Typography variant="h6">Pricipais destinos</Typography>
          <ul>
            <li>Rio de Janeiro</li>
            <li>Peru</li>
            <li>Canadá</li>
            <li>Italia</li>
          </ul>
        </section>


        <Box component="section" id="passeios">
          <Card  data-aos='fade-right' className="card">
            <CardActionArea className="actionArea">
              <CardMedia
                component="img"
                height="250"
                image={trilha}
                alt="trilha"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Trilhas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Se você gosta de explorar e estar em contato com a natureza
                  venha conosco em nossas trilhas guiadas por nossos
                  profissionais.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card data-aos='fade-left' className="card" id="esquiar">
            <CardActionArea className="actionArea">
              <CardMedia
                component="img"
                height="250"
                image={esquiar}
                alt="esquiar"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Esquiar na neve
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Para você que sempre quis esquiar na neve, a Oceanview pode te
                  levar para lugares incríveis onde você poderá praticar esse
                  esporte tão querido!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card data-aos='fade-right' className="card" id="mergulho">
            <CardActionArea className="actionArea">
              <CardMedia
                component="img"
                height="250"
                image={mergulho}
                alt="trilha"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Mergulho
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mergulhe e explore o mar da melhor forma possível através dos
                  mergulhos que são supervisionados e auxiliados por
                  profissionais.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card data-aos='fade-left' className="card" id="tour">
            <CardActionArea className="actionArea">
              <CardMedia
                component="img"
                height="250"
                image={cityTour}
                alt="trilha"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Tour pela cidade
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Conheça a cidade através de passeios organizados pela
                  Oceanview e garanta sua segurança e seu conforto enquanto se
                  diverte pela cidade.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        
        
          <Divider className="divider" textAlign="center">
            <Typography gutterBottom variant="h5">
              Perguntas frequentes
            </Typography>
        </Divider>
        <Box width="100%"  marginBotton="40px"  justifyContent="flex-start" id="faq">
          <Accordion color="secondary">
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="frist"
              id="frist"
            >
              <Typography variant="h6">
                Por que preciso viajar com a Ocean View?
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              Simples. Somos a melhor agência de viagens com as melhores
              avaliações. Nosso atendimento é reconhecido como um dos melhores
              no mercado de viagens. E nossa rede de hotéis e passeios
              surpreendem a todos. Tudo isso porque nossa prioridade não é seu
              dinheiro, e sim sua felicidade.{" "}
            </AccordionDetails>
          </Accordion>
          <Accordion color="secondary">
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="second"
              id="second"
            >
              <Typography variant="h6">
                O que isso está me oferecendo?
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              A Ocean View oferece a você viagens inesquecíveis com hospedagem e
              passeios incríveis, por um preço justo. Temos ótimas avaliações no
              mercado e prezamos muito pelo atendimento humanizado de nossos
              clientes.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="thrid"
              id="thrid"
            >
              <Typography variant="h6">E se eu não gostar?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              Garantimos que tudo ocorrerá bem em sua viagem. Mas caso tenha
              algum problema, entre em contato conosco, que iremos dar a
              solução! E no pior dos casos, faremos o reembolso de 100% do seu
              pagamento.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="fouth"
              id="fouth"
            >
              <Typography variant="h6">
                Não estou interessado em viajar agora.
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              Tudo bem, nós compreendemos. Mas, vale lembrar que preços de
              viagens podem subir de uma hora para outra, então pode ser que
              quando você queira viajar os preços não sejam mais os mesmos.
              Aconselhamos realizar sua viagem agora mesmo!
            </AccordionDetails>
          </Accordion>
        </Box>

        

        <Divider className="divider" textAlign="center">
          <Typography gutterBottom variant="h5" marginBottom="10px">
            Confira as opniões de nossos clientes
          </Typography>
        </Divider>

        <section id="feedback" className='bgMove'>
          <ul>
            <li data-aos='fade'>
              <div className="img"></div>
              <Typography variant="h7">Michael</Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li data-aos='fade'>
              <div className="img"></div>
              <Typography variant="h7">Carlos</Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li data-aos='fade'>
              <div className="img"></div>
              <Typography variant="h7">Pamela</Typography>
              Sensacional, uma das melhores experiências
            </li>
          </ul>
        </section>
      </main>

    </article>
  );
}
