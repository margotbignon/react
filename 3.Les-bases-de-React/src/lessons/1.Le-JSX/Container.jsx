import React from 'react'

function Container() {

    const txt = "Test";

    function handleClick() {
        console.log('Click')
    }

  return (
    <div>
        <p>Lorem ipsum</p>
        <ul className = "list">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
        </ul>
        <button>Valider</button>
        <p>{10 + 10}</p>
        <p>{"ab" + "c"}</p>
        <p>{"Le chat saute !".toUpperCase()}</p>
        <p>{txt}</p>
        <p>{[<span>Hello World</span>]}</p>
        <input type = "text" />
        <hr />
        <img src ="" alt="" />

        <p className="txt">Lorem ipsum dolor sit amet.</p>
        <label htmlFor=""></label>
        <button aria-label="toggle button"></button>
        <button onClick={() => handleClick}>Click</button>
    </div>
  )
}

export default Container