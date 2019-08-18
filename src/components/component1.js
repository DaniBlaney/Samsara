import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
  const props = useSpring({ config:{duration: 1000},
    to:[{opacity: 1, color: 'black'}, {opacity:0, color: 'gray'}],
    from: {opacity: 0}})
  return <animated.div style={props}><h1 style={c1Style}>Welcome</h1></animated.div>

}

const c1Style = {
  color: 'black',
  backgroundColor: '#f9f4fa',
  textAlign: 'center',
  padding: '1rem',
  fontFamily: 'fantasy',
}
