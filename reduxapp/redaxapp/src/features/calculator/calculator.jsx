import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toplam, cixma, vurma,bolme} from  './calculatorSlice'
import  './calculator.scss'


export function Calculator() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='counterContainer'>

        <div className="calculator">
          <div className='calculatorInput'>
            <input type="number" placeholder='enter a number1' />
            <input type="number"  placeholder='enter a number 2'/>
            <input type="text" placeholder='enter a calculate'/>
          </div>
          <div className="calculatorHesab">
            <span>+</span>
            <span>-</span>
            <span>*</span>
            <span>/</span>
            <span>result:</span>
          </div>
        </div>
       
      </div>
    </div>
  )
}