import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
  const props = useSpring({ config:{duration: 1000},
    to:[{opacity: 1, color: 'black'}, {color: 'gray'}],
    from: {opacity: 0}})
  return <animated.div style={props}><h1 style={c1Style}><img style={{width:50}} src="./images/bluebutt.gif" />Welcome</h1></animated.div>

}

const c1Style = {
  color: 'black',
  fontSize: '50px'
,  backgroundColor: '#f9f4fa',
  padding: '1.3rem',
  textAlign: 'center',
  fontFamily: 'fantasy',
}
