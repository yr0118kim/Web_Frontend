import styled from "styled-components";

export const SignupContainer = styled.div`
    width: 100%;
    height: 800px;
    /* background-color: aqua; */
    display: flex;
`;

export const LeftLogo = styled.div`
    width: 45%;
    height: 100%;
    background-color: #FFDBDB;
`;

export const SignupWrap = styled.div`
    width: 500px;
    height: 600px;
    /* background-color: blue; */
    margin: auto;
`;

export const SignupInHeader = styled.div`
    width: 100%;
    height: 50px;
    /* background-color: antiquewhite; */
    padding-top: 10px;
    text-align: center;
    font-size: 30px;
    color: #EA7589;
`;

export const SignupForm = styled.form`
    
`;

export const InputAllWrap = styled.div`
    margin-top: 50px;
`;

export const InputWrap = styled.div`
    div{
        width: 100px;
        height: 20px;
        /* background-color: orange; */
        color: #BBBCBD;
        margin-left: 50px;
    }
`;

export const Input = styled.input`
    width: 400px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #D9D9D9 ;
    outline:none;
    margin: 0 10px 8px 50px;

    font-size: 20px;
    color: #766D6D;
`;

export const IconWrap = styled.img`

`;


export const SignupBtn = styled.button`
    margin-top: 90px;
    margin-left: 50px;

    width: 400px;
    height: 60px;
    background-color:#FFA7A6;
    /* background-color: '#D9D9D9' : '#FFA7A6'}; */
    border-radius: 74px;
    border: none;

    font-size: 20px;
    color: #fff;

    cursor: pointer;
`;