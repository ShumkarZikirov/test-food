import {useState,useContext,useEffect} from "react";
import './letters.css'
import {MyContext} from "../../context/my-context";
import {services} from "../../services/services";

const Letters = () => {
    const {letter,data} = useContext(MyContext);
    const clickAdd = async (text) => {
        await services.getLetter(text)
            .then(res => {
                letter(res.data.meals)
            })
    }
  return(
      <div className={'letters'}>
          <h5>Browse By Name</h5>
          <div className={'letters-a'}>
              <a onClick={() => clickAdd('a')}  href="#">A</a>
              <a onClick={() => clickAdd('b')}  href="#">B</a>
              <a onClick={() => clickAdd('c')}  href="#">C</a>
              <a onClick={() => clickAdd('d')}  href="#">D</a>
              <a onClick={() => clickAdd('e')}  href="#">E</a>
              <a onClick={() => clickAdd('f')}  href="#">F</a>
              <a onClick={() => clickAdd('g')}  href="#">G</a>
              <a onClick={() => clickAdd('h')}  href="#">H</a>
              <a onClick={() => clickAdd('i')}  href="#">I</a>
              <a onClick={() => clickAdd('j')}  href="#">J</a>
              <a onClick={() => clickAdd('k')}  href="#">K</a>
              <a onClick={() => clickAdd('l')}  href="#">L</a>
              <a onClick={() => clickAdd('m')}  href="#">M</a>
              <a onClick={() => clickAdd('n')}  href="#">N</a>
              <a onClick={() => clickAdd('p')}  href="#">P</a>
              <a onClick={() => clickAdd('q')}  href="#">Q</a>
              <a onClick={() => clickAdd('r')}  href="#">R</a>
              <a onClick={() => clickAdd('s')}  href="#">S</a>
              <a onClick={() => clickAdd('t')}  href="#">T</a>
              <a onClick={() => clickAdd('u')}  href="#">U</a>
              <a onClick={() => clickAdd('v')}  href="#">V</a>
              <a onClick={() => clickAdd('w')}  href="#">W</a>
              <a onClick={() => clickAdd('x')}  href="#">X</a>
              <a onClick={() => clickAdd('y')}  href="#">Y</a>
              <a onClick={() => clickAdd('z')}  href="#">Z</a>
          </div>
      </div>
  )
}
export default Letters