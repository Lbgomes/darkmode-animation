import styled, { css } from 'styled-components';

type toggleProps = {
    isActive: boolean
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 50px;
    top: 50px;
    width: 20px;
    height: 20px;
    
`

export const DarkMode = styled.div<toggleProps>`
${({ isActive }) => css`
overflow: hidden;
position: relative;
transform: ${isActive ? "scale(1)" : "scale(0)"} ;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: 250vw;
height: 250vw;
border-radius: 100%;
background-color: #2a2a2a;
transition: 1s ease-in-out;
display: flex;
flex: 0 0 auto;
@media(max-width:  600px){
width: 250vh;
height: 250vh;
}
`}
`

export const Title = styled.h1<toggleProps>`
${({ isActive }) => css`
  font-size: 1.5em;
  position: absolute;
  transition: 1200ms;
  color: ${isActive ? "#fff" : "#2a2a2a"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  `}
`


export const Toggle = styled.button<toggleProps>`
    ${({ isActive }) => css`
    border: none;
    overflow: hidden;

    position: absolute;
    top: 50px;
    right: 50px;
    border-radius: 100%;
    background-color: ${isActive ? "#fff" : "#2a2a2a"};
    width: 15px;
    height: 15px;
    cursor: pointer;
    z-index: 2;
    transition: 500ms;

    `}
`