
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from "react-bootstrap";
import './middle.css'
import { hooks } from "./hooks";
import { Ctx } from "./App";

export default function Middle() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <Accordion id='accordion'>
         {
            Object.keys(hooks).map((key, index) => {
               return (
                  <Accordion.Item key={index} eventKey={index}>
                     <Accordion.Header>
                        <h3 id='hooksName' className='m-0 p-0 text-success'>{key}</h3>
                     </Accordion.Header>
                     <Accordion.Body id={'hooksDescription_' + mode}>
                        {hooks[key]}
                     </Accordion.Body>
                  </Accordion.Item>
               )
            })
         }
      </Accordion>
   )
}