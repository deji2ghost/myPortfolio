import { createGlobalStyle} from 'styled-components'


export const theme = {
  'dark':'#151515',
  'lightDark':'##242424',
  'green':'#4EE1A0',
  'ash':'#d9d9d9',
  'light':'#FFFFFF',
  'maxWidth':'1000px',
  'red':'#FF6F5B'
}

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    color: ${theme.light};
    transition: all 0.50s linear;
    background-color: ${theme.dark};
  }

  li{
  list-style-type: none;
}

a{
  text-decoration: none;
}

.Toastify__toast-icon svg{
  color: white !important;
  fill: white;
}

.toast-message {
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #38a169;
    min-width: 300px;
    padding: 1rem 1rem;
}
.toast-message-err{
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #e53e3e;
    min-width: 300px;
    padding: 1rem 1rem;
}
`

