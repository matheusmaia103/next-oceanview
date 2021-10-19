import { createGlobalStyle } from "styled-components";

import {
  canada,
  peru,
  rio,
  italia,
  resort1,
  coqueiro,
  img2,
  girl2,
  guy1,
  guy2,
} from "../public/images";

const GlobalStyles = createGlobalStyle`

    *{
        list-style: none;
        background-size: 100%;
        background-repeat: no-repeat;

        font-family: 'Poppins', sans-serif;

    }

    header{
        width: 100%;
        height: 90vw;
        min-height: 660px;
        max-height: 700px;

        color: white!important;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        color: black;  
        
        background-image:  linear-gradient(179deg,rgba(0,0,0,62) -5%,rgba(255,255,255,0) 60%);

        background-size: cover;
        background-position: center;

        position: relative;
        overflow: hidden !important;

        text-align: center;

        button{
            backdrop-filter: blur(3px);
        }

        h4,
        h5{
            position: relative;
            z-index: 2;
        }

    }

    article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        //background-color: #272838;
    }

    .divider{
        width: 100% !important;
        margin-bottom: 20px;
        margin-top: 80px;
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        padding: 0;
        padding-top: 60px;

        width: 100%;
        max-width: 1000px;

        overflow: hidden;


    .infos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin: 85px -30px 40px -30px;
        padding: 10px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        
        color: white;
        
        overflow: hidden;


        background-image:
            linear-gradient(178deg,rgba(0,0,0,1) -41%,rgba(255,255,255,0) 80%),
            linear-gradient(351deg,rgba(0,0,0,1) -41%,rgba(255,255,255,0) 100%),
            url(${"/img/coqueiros.jpg"});

        
        background-size: cover;
        background-position: center;
                
        transition: 1s ease;

            .text{                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

                width: 100%;

                padding: 20px;

                height: 100%;
            }

                
            @media screen and (max-width: 600px) {

                max-width: initial;
                width: 100% !important;
                display: initial;
                margin-left: 0;
                margin-right: 0;

                *{                
                    max-width: initial;
                }

                .img{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;

                    z-index: -3;

                    width: 100%;
                }

                .text{
                    background-color: transparent;
                    width: 100%;

                }

            }
        }

        .examples{

            
            background-color: #27482f;
            width: 80%;
            width: 100% !important;

            padding-top: 40px;
            padding-bottom: 10px;
            padding-left: 20px;

            margin-bottom: 5px;
            
            border-radius: 10px;
            border: 10px solid #27482f;

            color: white;

            overflow: hidden;

            

            ul{
                display: -webkit-inline-box;
                overflow-x: scroll;

                width: 100%;
                padding: 10px;
                padding-bottom: 30px;


                            
                    ::-webkit-scrollbar {
                        width: 10%; 
                    }

                    ::-webkit-scrollbar-track {
                        background-color: transparent;
                    }

                    ::-webkit-scrollbar-thumb {

                    border-radius: 20px;
                    background-color: #16281a;
                    }

                

                li{
                    margin: 5px;
                    margin-right: 40px;
                    margin-bottom: 10px;

                    width: 200px;
                    height: 350px;
                    background-color: darkgrey;

                    border-radius: 20px;

                    padding-left: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;

                    position: relative;

                    text-align: center;

                    cursor: pointer;

                    box-shadow: 6px 9px 20px -4px black;
                    transition: 3s all ease !important;
                    
                    }

                    li:nth-child(1){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) -5%, rgba(255,255,255,0) 25%), url(${"/img/destinations/rio.jpg"})
                    }

                    li:nth-child(2){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) -5%, rgba(255,255,255,0) 25%), url(${"/img/destinations/peru.jpg"})
                    }

                    li:nth-child(3){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) -5%, rgba(255,255,255,0) 25%), url(${"/img/destinations/canada.jpg"})
                    }

                    li:nth-child(4){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) -5%, rgba(255,255,255,0) 25%), url(${"/img/destinations/italia.jpg"});
                    }

                    li{
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;

                    }

                    

                    li:last-child{
                        margin-right: 5px;
                    }

                

            }
        }

        
    #passeios{
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;

        width: 90%;

        margin-top: 30px;
        margin-bottom: 50px;

        .card{

            box-shadow: 7px 9px 20px -4px grey;
            box-sizing: border-box;

            width: 25vw;
            max-width: 400px !important;
            min-width: 300px;

            margin: 20px;

            border-radius: 10px;


            transition: 0.3s ease;
            :hover{
                transform: scale(1.05);
            }
        }
    }
    

        #feedback{
            background-color: #0f485e;
            width: 100%;

            padding-top: 40px;
            padding-bottom: 10px;
            padding-left: 20px;

            
            margin: 0 -30px 40px -30px;
            

            color: white;

            overflow: hidden;

            display: flex;
            justify-content: center;

            
            
            background-image: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(255,255,255,0) 65%), url(${"/img/resort1.jpg"});
            background-size: cover;




            
            ul{
                display: -webkit-inline-box;


                overflow-x: scroll;

                margin: 0;
                padding: 0;
                padding-bottom: 30px;

                
                ::-webkit-scrollbar {
                    width: 10%; 
                    height: 15px;
                }

                ::-webkit-scrollbar-track {
                    background-color: transparent;
                }

                ::-webkit-scrollbar-thumb {

                border-radius: 20px;
                background-color: #191b1c;
                }

               li{
                   text-align: center;
                   width: 200px;
                   height: 350px;

                   margin-right: 40px;
                    margin-bottom: 10px;
                   margin-top: 20px;
                   padding: 20px;

                   border: 1px solid darkgray;
                   border-radius: 10px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;

                    backdrop-filter: blur(15px);
                    .img{
                        width: 80px;
                        height: 80px;
                        border-radius: 100%;

                        position: relative;
                        overflow: hidden;


                        background-color: darkgray;
                    }

               }

               
                    
           }
        }
    }

    
    #faq{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        width: 80%;

        margin: 0px 0 20px  0;
        

    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root,
    .MuiButtonBase-root,
    .MuiAcordionSummary-root,
    #third,
    #second,
    .acordionTitle{
        display: flex !important;
        justify-content: space-between !important;
        padding: 0px 10px !important;
    }

    }

    .bgMove{
        background-position: center;
        animation: bgMove 80s  infinite forwards;
    }

    @keyframes bgMove{
        0%{
            background-size: 150%;
        }

        50%{
            background-size: 300%;
        }

        100%{
            background-size: 150%;
        }
    }

    .bgMoveDown{
        background-size: 150%;
        background-position: center;
        animation: bgMoveDown 160s  infinite forwards;
    }
    @keyframes bgMoveDown{
        0%{
            background-position: center top;
        }

        50%{
            background-position: center bottom;
        }

        100%{
            background-position: center top;
        }
    }

    @media screen and (max-width: 600px) {
        main {
            z-index: 5;
            background: white;
            border-radius: 25px;
            
            margin-top: -30px;
            padding: 60px 0 20px 0;
        }

        .examples{
            width: 100% !important;
            border-radius: 0 !important;
        }

        #feedback{
            border-radius: 0!important;
            border: 0!important;
        }
    }
`;

export default GlobalStyles;
