import { useState, useEffect } from 'react';
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;
/*
function getScreenDefine (){
    const {height, width} = useWindowDimensions();
    return width>xl ? "xl" : width>lg ? "lg" : width>md ? "md" : width>sm ? "sm" : "xs";
  }*/
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  export default function useWindowDimensions() {
    const [windowDimensions] = useState(getWindowDimensions());
    const [setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

 