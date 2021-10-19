import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html,
    body{
        background-color: #ffffff;

        width: 100%auto;
        height: 100% !important;

        padding:0;
        margin: 0;

        #root{            
            width: 100%auto;
            height: 100% !important;
        }

        
        .divider{
            width: 80% !important;
            margin-bottom: 20px;
            margin-top: 80px;
            box-sizing: border-box !important;

            display: flex;
            flex-direction: row;
            align-items: center !important;

            *{
                box-sizing: border-box !important;
                margin: 0 !important;
                padding: 0 !important;
            }
        }
    }

    *{
        box-sizing: border-box;
        font-family: 'Poppins';
        text-transform: none !important;

        ul{
            list-style: none;
        }

    }

    nav{
        background-color: #041218;
        color: white!important;
        box-shadow: 6px 9px 20px -8px black;

        padding: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        right:0;
        left: 0;

        z-index: 10;
        button{
            color: white !important;
        }
        .hamburguer{
            display: none;
        }
        
        #logo{
            width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 60%;

            margin: 0;
            padding: 0;
            li{
                max-width: 30px;
                color: white !important;
            }
        }
    }

    #drawer{
        
        .MuiPaper-root{
            background-color: #000000b3;
            color: white;
            
        }

        .MuiIconButton-colorInherit {
            color: inherit;
            transform: rotate(
            90deg);
        }

        #close{
            .MuiSvgIcon-root{
                transform: rotateX(180) !important;
            }
        }
    }

    #app{
        width: 100% !important;
        height: 100% !important;

        
        .css-13xfq8m-MuiTabPanel-root{
            position: relative;
            padding: 0;
            margin: 0;
        }
    }

    .footer{
        background-color: white;
    }

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: black;
        color: #e1e1e1;
        font-size: 14px;

        width: 100%;

        padding: 15px 0 100px 0;
        overflow: hidden;

        hr{
            width: 90%;
        }

        #mail{
            
            display: flex;
            align-items: center;
            justify-content: space-around;

            text-align: center;

            .input{
                background-color: white;
                color: black;

                display: inline-grid;

                transform: scale(0.8)
            }

            .btn{
                background-color: transparent !important;
                color:white;
            }

        }

        #social{
            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            #btns{
                display: flex;
                align-items: center;
                justify-content: space-evenly;

            }
        }

        #imgDiv{
            width: 100%;

            height:200px;

            display: flex;
            align-items: flex-end;
            justify-content: center;
            
            img{
                max-width: 150px;
            }
            
        }
    }

    
    @media screen and (max-width: 600px) {
        
        nav{
             ul{
                display: none;
            }

            #hamburguer{
                display: inline;
            }
        }
    
    }
    
    @media screen and (min-width: 600px) {
        
        nav{
             ul{
                display: flex;
            }

            #hamburguer{
                display: none !important;
            }
        }
    
    }


`;

export default GlobalStyle;
