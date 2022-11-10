import { useEffect } from "react";
import { TituloHero } from "./Hero.elements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroTitulo = () => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {

    if(inView) {
      animation.start({
        opacity: 1,
        scale: [1, 1.5, 1],
        transition: {
          duration: 2
        }
      })
    } 
    if(!inView) {
      animation.start({
        opacity: 0,
        scale: [1, 1.5, 1],
        transition: {
          duration: 2
        }
      })
    }

  }, [inView])

  return (  
    <TituloHero as={motion.div}
      ref={ref}
      initial={{
        opacity: 0,
        scale: .5 
      }}
      animate={animation}
    >Rick and Morty</TituloHero>
  );
}
 
export default HeroTitulo;