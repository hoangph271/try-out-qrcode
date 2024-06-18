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
            window.alert(res[0].rawValue);
          }}
        />
      </div>
    </>
  )
}

export default App
