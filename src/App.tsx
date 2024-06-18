import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

import './App.css'

function App() {
  const [output, setOutput] = useState<string[]>([])

  return (
    <>
      <div>
        <div>
          {output.map(it => <div key={it}>{it}</div>)}
        </div>
        <Scanner
          classNames={{
            container: "Scanner",
          }}
          onScan={res => {
            setOutput(res.map(it => it.rawValue.slice(0, 25)))
          }}
        />
      </div>
    </>
  )
}

export default App
