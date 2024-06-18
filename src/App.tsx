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
          formats={[
            'qr_code',
            'micro_qr_code',
            'rm_qr_code',
            'maxi_code',
            'pdf417',
            'aztec',
            'data_matrix',
            'matrix_codes',
            'dx_film_edge',
            'databar',
            'databar_expanded',
            'codabar',
            'code_39',
            'code_93',
            'code_128',
            'ean_8',
            'ean_13',
            'itf',
            'linear_codes',
            'upc_a',
            'upc_e'
          ]}
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
