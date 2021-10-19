import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`




    main#loginPage{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100% !important;
        max-width: unset;


        padding: 100px 0 60px 0;

        position: relative;

        background-color: white;

        img{
            position: absolute;
            z-index: 0;
            display: none;
        }


        
            @media screen and (max-width: 600px){
                padding-top: 50px;
                justify-content: flex-start;
                border-radius: 0;
                padding-bottom: 0;
            }

        form{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;

            height: 100vh;
            width: 70%;
            max-width: 650px;
            padding-top: 50px;
            padding-bottom: 50px;

            border-radius: 10px;

            background-color: #ffffffc2;
            backdrop-filter: blur(10px);

            position: relative;
            z-index: 3;

            box-shadow: 0px 0px 40px -20px black;
            
            @media screen and (max-width: 600px){
                width: 100% !important;
                border-radius: 0;



            }
            .textfield{
                margin: 10px;
            }

            .divider{
                margin-top: 40px;
                align-items: flex-start !important;
            }
            
            .MuiInputBase-root{
                padding: 10px;
            }

            #loginMethods{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;

                height: 200px;
                .btn{
                    background-color: white;
                    color: black;

                    width: 100%;
                    border-radius: 50px;

                    border: 1px solid darkgray !important;
                }

            }

        }
    }

`;

export default GlobalStyles;
