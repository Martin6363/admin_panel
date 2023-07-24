import React from 'react'

export function Button({onDelete, text, backgroundColor, padding, fontSize, color, border}) {
  return (
    <div>
      <button
        onClick={()=> {
          onDelete()
        }}
        style={
          {
            backgroundColor: backgroundColor? backgroundColor : 'initial', 
            padding: padding ? padding : '3px 10px', 
            color: color ? color : '#333',
            fontSize: fontSize ? fontSize : '16px',
            border: border ? border : '1px solid black'
          }
        }>{text}</button>
    </div>
  )
}
