
import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Ctx } from './App'
import './hooks.css'

function UsingState() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>useState() + Object.keys().</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from 'react'
   import ReactDOM from 'react-dom'

   function UsingState() {
      const destinations = {
         'Bishkek': 'Kyrgyzstan',
         'Nursultan': 'Kazakstan',
         'Tashkent':'Uzbekistan',
         'Ashhabat': 'Turkmenistan',
         'Baku': 'Azerbayjan',
         'Ankara': 'Turkiye'
      }
      const [city, setCity] = React.useState()
      const choose = (i) => setCity(i)
      return (
         <div>
            {
               Object.keys(destinations).map((key, index) => {
                  return (
                     <h1 onClick={() => choose(key)} key={index}>{key}</h1>
                  )
               })
            }
            <hr></hr>
            <h1>destination(country): {destinations[city]}</h1>
         </div>
      )
   }

   ReactDOM.render(<UsingState/>,document.getElementById('root'))
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/wonderful-montalcini-zjpzk'>codesandbox</a></p>
      </div>
   )
}
function UsingEffect() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>useState() + useEffect() + setInterval().</h4>
         <hr id={'hr_' + mode}></hr>

         <pre id={'pre_' + mode}>
            {
               `
   import React,{useEffect} from 'react'
   import ReactDOM from 'react-dom'

   function UsingEffect(){
      const [date,setDate]=React.useState(new Date())
      useEffect(()=>{
         const interval=setInterval(()=>{
            setDate(new Date())
         },1000)
         return()=>clearInterval(interval)
      },[date])
      return(
         <div>
            <h1>{date.toLocaleTimeString()}</h1>
         </div>
      )
   }

   ReactDOM.render(<UsingEffect/>,document.getElementById('root'))
   
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/awesome-elgamal-ivux0?file=/src/index.js'>codesandbox</a></p>

      </div>
   )
}

function UsingRef() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Getting previous random number with useRef().</h4>
         <h4 id={'h4_' + mode}>Option A.</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState, useEffect, useRef } from "react";
   import ReactDOM from 'react-dom'

   function UsingRef() {
      const [random, setRandom] = useState()
      const ref1 = useRef(random)
            
      useEffect(() => {
         const interval = setInterval(() => {
            setRandom(Math.floor(Math.random() * 99))
         }, 1000)
         ref1.current = random
         return () => clearInterval(interval)
      }, [random])
            
      return (
         <div>
            <h1>State1:{random}</h1>
            <h1>Ref1:{ref1.current}</h1>
         </div>
      )
   }

   ReactDOM.render(<UsingRef/>,document.getElementById('root'))
   
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/floral-night-4q6o9'>codesandbox</a></p>
         <hr id={'hr_' + mode}></hr>
         <h4 id={'h4_' + mode}>Using useEffect() + Array Methods.</h4>
         <h4 id={'h4_' + mode}>Option B.</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `      
   import React, { useState, useEffect } from "react";

   function App() {

      const [random, setRandom] = useState([])
      const [active, setActive] = useState(false)

      useEffect(() => {
         let interval;
         if (active) {
            interval = setInterval(() => {
               let item = Math.floor(Math.random() * 99)
               setRandom([item, ...random])
            }, 1000)
            if (random.length > 3) {
               const arr = [...random]
               arr.pop()
               setRandom([...arr])
            }
            console.log(random)
         }
         return () => clearInterval(interval)
      }, [random, active])
      return (
         <div>
            <button onClick={() => setActive(!active)}>Start</button>
         {
            random.length === 1 ? (
               <h1>First:{random[0]}</h1>
            ) : (
               random.length === 2 ? (
                  <div>
                     <h1>First:{random[0]}</h1>
                     <h1>Second:{random[1]}</h1>
                  </div>
               ) : (
                  random.length === 3 ? (
                     <div>
                        <h1>First:{random[0]}</h1>
                        <h1>Second:{random[1]}</h1>
                        <h1> Third:{random[2]}</h1>
                     </div>
                  ) : null
               )
            )
         }
         </div >
      )
   }
   ReactDOM.render(<App/>,document.getElementById('root'))
               `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/youthful-noether-278qv'>codesandbox</a></p>
      </div>
   )
}
function Timer() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Timer with useState() + useEffect().</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState, useEffect } from "react";
   import ReactDOM from 'react-dom'

   function Timer() {
      let [seconds, setSeconds] = useState(0)
      const [active,setActive]=useState(false)
            
      useEffect(() => {
         active ?
            seconds=setInterval(()=>setSeconds(s=>s+1),1000):
            clearInterval(seconds)
         return () => clearInterval(seconds)
      }, [active])
      
      return (
         <div>
            <button onClick={()=>setActive(!active)}>{!active && !seconds ? 'start' : !active && seconds ? 'continue' : 'pause'}</button>
            <button onClick={()=>{setActive(false); setSeconds(0)}}>reset</button>
            <h1>{seconds}</h1>
         </div>
      )
   }

   ReactDOM.render(<Timer/>,document.getElementById('root'))
   
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/crimson-monad-7i2rk'>codesandbox</a></p>
      </div>
   )
}

function Props1() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Passing components as props.</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react"
   import ReactDOM from "react-dom"
   import App from "./App"
   import Component from './component'
               
   function Index() {
      return <App Cmp1={Component} />
   }       
   ReactDOM.render(<Index />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>

         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import SubComponent from "./subComponent";
               
   export default function App({Cmp1}) {
      return <Cmp1 Cmp2={SubComponent} />
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function Component({Cmp2}) {
      return <Cmp2/>
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function SubComponent() {
      return <h1>SubComponent</h1>
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/distracted-architecture-qid0h'>codesandbox</a></p>
      </div>
   )
}

function Props2() {
   const received = useContext(Ctx)
   const mode = received[0]
   const variety = ['<Component/>', 'Component', 'props.Component', 'props.Component()', '<props.Component/>']
   return (
      <div>
         <div className='d-flex flex=wrap justify-content-around align-items-center '>
            <ul id={'ul_' + mode}>
               {
                  variety.map((item, index) => {
                     return <li key={index}>{item}</li>
                  })
               }
            </ul>
            <h4 id={'h4_' + mode}>First option.</h4>

         </div>

         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import Component from './component.js'
               
   function Index() {
      return <App Cmp1={Component}/>
   }       
   ReactDOM.render(<Index />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <h6 id={'h6_' + mode}>First sub_option</h6>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function App({Cmp1}) {
         return <Cmp1/>
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <h6 id={'h6_' + mode}>Second sub_option</h6>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function App({Cmp1}) {
         return (
            <div>
               {
                  Cmp1()
               }
            </div>
         )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function Component() {
      return <h1>property</h1>
   }
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/loving-sun-jd23v'>codesandbox</a></p>
         <hr id={'hr_' + mode}></hr>
         <h4 id={'h4_' + mode}>Second option</h4>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import Component from './component.js'
               
   function Index() {
      return <App Cmp1={<Component/>}/>
   }       
   ReactDOM.render(<Index />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <h6 id={'h6_' + mode}>First sub_option</h6>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function App({Cmp1}) {
         return (
            <div>
            {
               Cmp1
            }
            </div>
         )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <h6 id={'h6_' + mode}>Second sub_option</h6>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function App(props) {
         return (
            <div>
               {
                  props.Cmp1
               }
            </div>
         )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function Component() {
      return <h1>property</h1>
   }
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/loving-sun-jd23v'>codesandbox</a></p>
      </div>
   )
}
function ConditionalRendering() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Conditional rendering(? : &&).</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";

   export const Ctx=React.createContext()
               
   function Index() {
      const [start,setStart]=React.useState(false)
      return (
         <Ctx.Provider value={[start,setStart]}>
            <App/>
         </Ctx.Provider>
      )
   }       
   ReactDOM.render(<Index />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import Component from "./component";
            
   export default function App() {
      return (
         <div>
            <Component/>
         </div>
      )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import SubComponent1 from './subComponent1'
   import SubComponent2 from './subComponent2' 
   import {Ctx} from './index'             
   export default function Component() {
      const received=React.useContext(Ctx)
      const start=received[0]
      const setStart=received[1]
      return (
         <div>
         <button onClick={()=>setStart(!start)}>change</button>
            {
               start ? <SubComponent1/> : <SubComponent2/>
            }
         </div>
      )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function SubComponent1() {
      return (
         <h1>SubComponent1</h1>
      )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function SubComponent2() {
      return (
         <h1>SubComponent2</h1>
      )
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/dazzling-paper-72f08'>codesandbox</a></p>

      </div>
   )
}

function Props3() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Passing state as props.</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React,{useState} from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
               
   function Glavka() {
      const [vuz,setVuz]=useState('Voenmeh')
      return <App v1={vuz}/>
   }       
   ReactDOM.render(<Glavka />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import Component from "./component";
               
   export default function App({v1}) {
      return <Component v2={v1}/>  
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import SubComponent from './subComponent'
   export default function Component({v2}) {
      return <SubComponent v3={v2}/>
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function SubComponent({v3}) {
      return <h1>{v3}</h1>
   }
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/dazzling-paper-72f08'>codesandbox</a></p>
      </div>
   )
}

function UsingContext() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <pre id={'pre_' + mode}>
            {
               `
   import React,{useState,createContext} from "react";
   import ReactDOM from "react-dom";
   import App from "./App";

   export const Ctx=createContext()

   function Glavka() {
      const [fruits,setFruits]=useState(
         ['kurma','mandarin','apple','orange'])
      return (
         <Ctx.Provider value={fruits}>
            <App/>
         </Ctx.Provider>
      )
   }       
   ReactDOM.render(<Glavka />, document.getElementById('root'))
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";
   import Component from "./subComponent";
               
   export default function App() {
      return <Component/>  
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from "react";

   export default function Component() {
      return <SubComponent/>
   }
`
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React,{useContext} from "react";
   import {Ctx} from './index'
   export default function SubComponent() {
      const received=useContext(Ctx)
      return (
         <ul>
            {
               received.map((item,index)=><li key={index}>{item}</li>)
            }
         </ul>
      )
   }
`
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/holy-snowflake-te45u'>codesandbox</a></p>

      </div>
   )
}
function DynamicData() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <pre id={'pre_' + mode}>
            {
               `
   const data =
   {
      name: 'List',
      description: [
         {
            name: 'JS',
            description: [
               {
                  name: 'function',
                  description: 'functional programming'
               },
               {
                  name: 'prototype',
                  description:[
                     {
                        name:'objects',
                        description:[
                           {
                              name:'inheritance',
                              description:'inheritance in JS'
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         {
            name: 'React',
            description: [
               {
                  name: 'Hooks',
                  description: 'use Effect()'
               },
               {
                  name: 'fragment',
                  description: 'fragments/inheritance'
               }
            ]
         },
      ]
   }
   export default data
   `
            }
            <hr id={'hr_' + mode}></hr>
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/wild-dew-22kpx'>codesandbox</a></p>
      </div>
   )
}

function UsingMemo() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Each time by incrementing count, function factorial is CALLED.</h4>
         <h4 id={'h4_' + mode}>To avoid unnecessary function calling, can be used useMemo() or useEffect().</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState} from "react";

   export default function App() {
      const [count, setCount] = useState(0)
      const [value, setValue] = useState(1)
      const result = factorial(value)
    
      function factorial(n) {
        console.log('function factorial is called')
        return n <= 0 ? 1 : n * factorial(n - 1)
      }
    
      return (
        <div>
          <button onClick={() => setCount(c => c + 1)}>{count}</button>
          <input
            type='number'
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <h1>factorial {result}</h1>
        </div>
      )
   }
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/vigilant-varahamihira-lhuk5'>codesandbox</a></p>

         <hr id={'hr_' + mode}></hr>
         <h4 id={'h4_' + mode}>useMemo().</h4>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState, useMemo} from "react";

   export default function App() {
      const [count, setCount] = useState(0)
      const [value, setValue] = useState(1)
      const result = useMemo(()=>factorial(value),[value])
    
      function factorial(n) {
        console.log('function factorial is called')
        return n <= 0 ? 1 : n * factorial(n - 1)
      }
    
      return (
        <div>
          <button onClick={() => setCount(c => c + 1)}>{count}</button>
          <input
            type='number'
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <h1>factorial: {result}</h1>
        </div>
      )
   }
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/festive-cache-1cxp0'>codesandbox</a></p>
         <hr id={'hr_' + mode}></hr>
         <h4 id={'h4_' + mode}>useEffect().</h4>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState, useEffect} from "react";

   export default function App() {
      const [count, setCount] = useState(0)
      const [value, setValue] = useState(1)
      let result=factorial(value);
    
      function factorial(n) {
        console.log('function factorial is called')
        return n <= 0 ? 1 : n * factorial(n - 1)
      }

      useEffect(()=> result,[value])
    
      return (
        <div>
          <button onClick={() => setCount(c => c + 1)}>{count}</button>
          <input
            type='number'
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <h1>factorial: {result}</h1>
        </div>
      )
   }
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/nifty-pike-ofxhp'>codesandbox</a></p>
      </div>
   )
}

function UsingReducer() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <pre id={'pre_' + mode}>
            {
               `
   import { useReducer, useRef, useEffect } from "react";
   import ReactDOM from 'react-dom'

   function UsingReducer() {

      const initialState = {
         time: 0,
         isRunning: false,
         name: 'start',
      }

      const [state, dispatch] = useReducer(reducer, initialState)
      const ref = useRef()

      useEffect(() => {
         if (!state.isRunning) return;
         ref.current = setInterval(() => dispatch({ type: 'tick' }), 1000)
         return () => {
            clearInterval(ref.current)
            ref.current = 0
         }
      }, [state.isRunning])

      function reducer(state, action) {
         switch (action.type) {
            case 'tick':
               return { ...state, isRunning: true, time: state.time + 1, name: 'pause' }
            case 'start':
               return { ...state, isRunning: true, name: 'start' }
            case 'stop':
               return { ...state, isRunning: false, name: 'continue' }
            case 'reset':
               return { time: 0, isRunning: false, name: 'start' }
            default:
               throw new Error()
         }
      }
      return (
         <div>
            <h1>{state.time}</h1>
            <button onClick={() => state.name === 'start' ? dispatch({ type: 'start' }) : state.name === 'pause' ? dispatch({ type: 'stop' }) : dispatch({ type: 'tick' })}>{state.name}</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
         </div>
      )
   }

   ReactDOM.render(<UsingReducer/>,document.getElementById('root'))
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/focused-rubin-ck2qg'>codesandbox</a></p>

      </div>
   )
}

function UsingCallback() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>Each time button is pressed, function-subtract is re-created.</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useState } from "react";
   const st = new Set()
               
   function UsingCallback() {
      const [count, setCount] = useState(0)

      const subtract = () => setCount(c => c - 1)

      st.add(subtract)
      console.log(st)
               
      return <button onClick={() => subtract()}>{count}</button>
   }
   ReactDOM.render(<UsingCallback/>,document.getElementById('root'))
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/lingering-river-7ullt'>codesandbox</a></p>
         <hr id={'hr_' + mode}></hr>
         <h4 id={'h4_' + mode}>UseCallback().</h4>
         <pre id={'pre_' + mode}>
            {
               `
   import React, { useCallback, useState } from "react";
   const st = new Set()
               
   export default function Component() {
      const [count, setCount] = useState(0)
      const changed=false

      const subtract = useCallback(() => setCount(c => c - 1), [changed])

      st.add(subtract)
      console.log(st)
               
      return <button onClick={() => subtract()}>{count}</button>
   }
   ReactDOM.render(<UsingCallback/>,document.getElementById('root'))
   `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/polished-fire-zbc26'>codesandbox</a></p>
      </div>
   )
}

function TodoList() {
   const received = useContext(Ctx)
   const mode = received[0]
   return (
      <div>
         <h4 id={'h4_' + mode}>TodoList with useState()+useEffect().</h4>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';

   const Glavka = () => <App/>

   ReactDOM.render(<Glavka/>,document.getElementById('root'))    
               `
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from 'react'
   import FormTodo from './formTodo'
   import Todo from './todo'
   import 'bootstrap/dist/css/bootstrap.min.css'
   import { Container, Row, Col, Card } from 'react-bootstrap'

   export default function App() {
      const [todos, setTodos] = React.useState([
         {
            text: "This is first task",
            isDone: false
         }
      ]);

      const addTodo = text => {
         const newTodos = [...todos, { text }];
         setTodos(newTodos);
      };

      const markTodo = index => {
         const newTodos = [...todos];
         newTodos[index].isDone === false ? (
         newTodos[index].isDone=true) : newTodos[index].isDone= false
         setTodos(newTodos);
      };

      const removeTodo = index => {
         const newTodos = [...todos];
         newTodos.splice(index, 1);
         setTodos(newTodos);
      };

      return (

         <Container fluid>
            <h1 className="text-center mb-4">Todo List</h1>
            <Row>
               <Col xs={4}><FormTodo addTodo={addTodo} /></Col>
               <Col>
                  {todos.map((todo, index) => (
                     <Card>
                        <Card.Body>
                           <Todo
                              key={index}
                              index={index}
                              todo={todo}
                              markTodo={markTodo}
                              removeTodo={removeTodo}
                           />
                        </Card.Body>
                     </Card>
                  ))}
               </Col>
            </Row>
         </Container>
      );
   }
               `
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from 'react'
   import 'bootstrap/dist/css/bootstrap.min.css'
   import { Button, Form, Col } from 'react-bootstrap'

   export default function FormTodo({ addTodo }) {
      const [value, setValue] = React.useState('')

      const handleSubmit = e => {
         e.preventDefault();
         if (!value) return;
         addTodo(value);
         setValue('');
      };

      return (
         <Form onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label><h3>Add todo</h3></Form.Label>
               <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="outline-danger mb-3" className='mt-3' type="submit">Submit</Button>
         </Form>
      );
   }
               `
            }
         </pre>
         <hr id={'hr_' + mode}></hr>
         <pre id={'pre_' + mode}>
            {
               `
   import React from 'react'
   import 'bootstrap/dist/css/bootstrap.min.css'
   import { Button } from 'react-bootstrap'
               
   export default function Todo({ todo, index, markTodo, removeTodo }) {
      return (
         <div>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
               <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
               <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
         </div>
      );
   }
               `
            }
         </pre>
         <p id={'p_' + mode}>try it: <a id={'a_href'} href='https://codesandbox.io/s/goofy-galois-16zvs'>codesandbox</a></p>
      </div>
   )
}

export const hooks = {
   'Use State()': <UsingState />,
   'Use Effect()': <UsingEffect />,
   'Use Ref()': <UsingRef />,
   'Timer()': <Timer />,
   'Props1()': <Props1 />,
   'Props2()': <Props2 />,
   'Conditional Rendering': <ConditionalRendering />,
   'Props3()': <Props3 />,
   'UseContext()': <UsingContext />,
   'Dynamic Data Structure': <DynamicData />,
   'Use Memo()': <UsingMemo />,
   'Use Reducer()': <UsingReducer />,
   'Use Callback()': <UsingCallback />,
   'Todo List': <TodoList />,
}
