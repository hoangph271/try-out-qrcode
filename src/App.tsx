import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Scanner } from '@yudiel/react-qr-scanner';

import './App.css'

function App() {

  return (
    <>
      <div>
        <Scanner
          classNames={{
            container: "Scanner",
          }}
          onScan={res => {
            console.info(res[0].rawValue);
          }}
        />
      </div>
    </>
  )
}

export default App
