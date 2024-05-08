import { useState } from "preact/hooks"

export default function Counter(){
    const [counter, setCounter] = useState(0)

    return (
        <div class="mx-auto flex flex-col flex-nowrap justify-center items-center mb-3">
          <div class="text-yellow-300 text-xl mr-4 text-center">{counter}</div>
          <div>
            <button class="border px-4 py-2 text-xl" onClick={()=>{ setCounter(counter => counter-1) }}>-</button>
            <button class="border px-4 py-2 text-xl" onClick={()=>{ setCounter(counter => counter+1) }}>+</button>
          </div>
        </div>
    )
}