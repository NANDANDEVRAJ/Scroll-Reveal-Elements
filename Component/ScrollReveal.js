import React,{useEffect} from "react";
import "./ScrollReveal.css"
import {motion,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
 
export default function ScrollReveal() {
    const {ref, inView} = useInView({threshold: 0.5});
    const animation = useAnimation();
    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition:{
                    type: "spring",
                    duration: 1,
                    bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({x: "-100vw"});
        }
    },[inView])
  return (
    <div>
      <section className="sec-01">
        <div className="container">
          <motion.h2 className="MainTitle"
          initial={{scale: 3, opacity: 0}}
          animate={{scale: 1, opacity: 1 }}
          transition={{delay: 2,type: "spring"}}
          >Reveal Elements on Scroll</motion.h2>

          <div className="content">
            <motion.div className="image"
            initial={{y:100,opacity: 0}}
            animate={{y:0,opacity: 1}}
            transition={{duration: 2}}
            >
              <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="flower" />
            </motion.div>
            <motion.div className="text-box"
            initial={{x: 150 ,y:-150, opacity: 0}}
            animate={{x:-80, y:70, opacity: 1}}
            transition={{duration: 2}}
            >
              <h3>Lorema akajal</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum deserunt ipsa similique! Ex molestias, quibusdam debitis
                obcaecati autem aliquam quia voluptatum deserunt ipsa similique!
                Ex molestias, quibusdam debitis obcaecati autem aliquam quia
                voluptatum
              </p>
            </motion.div>
          </div>
          <div className="media-icons">
            <a href="#" className="icon">
              <motion.i className="fab fa-facebook"
              initial={{y: 60}}
              animate={{y: 0}}
              transition={{delay:2}}
              ></motion.i>
            </a>
            <a href="#" className="icon">
              <motion.i className="fab fa-instagram"
              initial={{y: 60}}
              animate={{y: 0}}
              transition={{delay:2.2}}
              ></motion.i>
            </a>
            <a href="#" className="icon">
              <motion.i className="fab fa-twitter"
              initial={{y: 60}}
              animate={{y: 0}}
              transition={{delay:2.4}}
              ></motion.i>
            </a>
            <a href="#" className="icon">
              <motion.i className="fab fa-youtube"
              initial={{y: 60}}
              animate={{y: 0}}
              transition={{delay:2.6}}
              ></motion.i>
            </a>
          </div>
          <div ref={ref}>
          <motion.div className="three-box" animate={animation}>
            <div className="box" 
            >loreLorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum deserunt ipsa similique! Ex molestias, quibusdam debitisobcaecati autem aliquam quia voluptatum deserunt ipsa similique!
                Ex molestias, quibusdam debitis obcaecati autem aliquam quia voluptatum
          </div>
            <div className="box">loreLorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum deserunt ipsa similique! Ex molestias, quibusdam debitisobcaecati autem aliquam quia voluptatum deserunt ipsa similique!
                Ex molestias, quibusdam debitis obcaecati autem aliquam quia voluptatum
          </div>
            <div className="box">loreLorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum deserunt ipsa similique! Ex molestias, quibusdam debitisobcaecati autem aliquam quia voluptatum deserunt ipsa similique!
                Ex molestias, quibusdam debitis obcaecati autem aliquam quia voluptatum
          </div>
        </motion.div>
        </div>
        </div>
      </section>
    </div>
  );
}
