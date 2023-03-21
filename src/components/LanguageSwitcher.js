import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {useRef, useEffect} from 'react';
import { changeLanguage } from "i18next";

const LanguajeSwitcher = (lang) => {
  let el
  const ref = useRef(null);
  useEffect(() => {
    // 👇️ use document.getElementById()
    el = document.getElementById('dfmessenger');
    console.log(`df-messenger id ${el} `);
    //el.item(0).setAttribute('language-code', 'es')

    const el2 = ref.current;
    console.log(el2);

  }, []);
  console.log(lang);
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    // 👇️ use document.getElementById()
    const el = document.getElementById('dfmessenger');
    console.log(el);
    el.setAttribute('language-code', lang)

  };


  return (
    <>
      <NavDropdown title={i18n.resolvedLanguage} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={()=>{
          i18n.changeLanguage("es")
          handleClick("es") 
        }} >
          ES
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>(i18n.changeLanguage("fr"))} >
          FR
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>(i18n.changeLanguage("de"))} >
          DE
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>(i18n.changeLanguage("it"))} >
          IT
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=> {
          
          i18n.changeLanguage("en")
          handleClick("en") }}
           >
          EN
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>{i18n.changeLanguage("ca")
        handleClick("ca") 
      
      }} >
          CA
        </NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LanguajeSwitcher;

