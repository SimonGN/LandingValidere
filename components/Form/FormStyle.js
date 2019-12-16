import styled from 'styled-components';


const FormStyle = styled.div`

    input{
        outline:none;
        border: none;
        border-bottom: 1px solid black;
        font-family: "Pressura";
        font-size: 16px;
        letter-spacing: 0.3px;
        transition-duration: 1s;
        transition-timing-function: ease-in-put;
        
        &:focus{
            color:#9CE8C7;
        }
    }
    input, select{
        margin-bottom:13%;
        width:95%;
        padding-bottom:3%;
        padding-left:3%;
    }
    select{
        padding-left:2%;
        width:100%;
    }
    select{
        outline:none;
        border:none;
        background:white;
        border-bottom: 1px solid black;
        font-family: "Pressura";
        font-size: 16px;
        letter-spacing: 0.3px;
    }
    .readmore{
        margin-bottom:30%;
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        input, select{
            margin-bottom:8%;
            width:96%;
            padding-bottom:3%;
            padding-left:3%;
        }
        select{
            padding-left:2%;
            width:99%;
        }
        .readmore{
            margin-bottom:20%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }

`;

export { FormStyle };
