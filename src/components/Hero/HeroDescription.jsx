import { useEffect } from "react";
import { DescriptionHero } from "./Hero.elements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroDescription = ({frase}) => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {

    if(inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 2
        }
      })
    } 
    if(!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 2
        }
      })
    }

  }, [inView])

  return (  
    <DescriptionHero as={motion.p}
      ref={ref}
      initial={{opacity: 0}}
      animate={animation}
    >{frase.text}<span>{frase.autor}</span></DescriptionHero>
  );
}
 
export default HeroDescription;