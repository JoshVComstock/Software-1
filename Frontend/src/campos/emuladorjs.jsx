import React from 'react'
import styled from 'styled-components';

const Emuladorjs = () => {
/*const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;*/

    return(
   <Container>
     <Codeditor className="code-editor">
         <Code className="code">
             <div className="js-code">
                 <H1>JS</H1>
                 <Textarea spellcheck="false"></Textarea>
             </div>
             <Run>Run</Run>
         </Code>
         <Iframe id="result"></Iframe>
     </Codeditor>
   </Container>
    )

}
export default Emuladorjs
const Run=styled.button`
    padding: 5px;
    width: 60px;
    height: 40px;
    background: green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #0d6a0d;
        color: #fff;
    }
`;

const Textarea=styled.textarea`
     width: 100%;
    height: calc(100% - 4rem);
    background-color: #605ee3;
    color: #1a009c;
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    resize: vertical;
    color: #fff;
    outline: none;
`;
const H1=styled.h1`
    font: 600 1.2rem sans-serif;
    margin: 1rem 0;
    color: #fff;
`;
const Container=styled.div`
    height: 100vh;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Code=styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    overflow-y: auto;
    background-color:#03045e;
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
`;
const Codeditor=styled.div`
    width: 90vw;
    height: 90vh;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid  #1a009c;
`;
const Iframe=styled.iframe`
width: 100%;
height: 100%;
border: none;
background: #dedcdc;
`;
