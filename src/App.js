
import './App.css';
import Web3 from "web3"
import Transacciones from './Transacciones';
function App() {

  //Creamos una instancia de web3
  const web3 = new Web3("https://sepolia.infura.io/v3/5893609ffe7c48eab30ec9a7502020cb");
  console.log(web3, "web3");

  console.log("SHA3: ", web3.utils.sha3("hola mundo"))
  console.log("Keccak256: ", web3.utils.keccak256("hola mundo"))
  console.log("Solidity SHA3 (input 1): ", web3.utils.soliditySha3("hola mundo"))
  console.log("Solidity SHA3 (input 2): ", web3.utils.soliditySha3("hola mundo", "Bladimir"))

  //Tambien podemos incriptar declarando el tipo de datos y su valor
  console.log("Solidity SHA3 Type and Value: ", web3.utils.soliditySha3({ type: "string", value: "Hola mundo" }))
  console.log("Solidity SHA3 (input 1): ", web3.utils.soliditySha3("Hola mundo"))

  console.log("Solidity SHA3 Type and Value con otro tipo de datos diferente a String: ", web3.utils.soliditySha3({ type: "string", value: "Hola mundo" }, { type: "string", value: "Hola Bladimir" }, { type: "uint16", value: "0x30311" }))

  //obtener un codigo exadecimal random por si necesita para algo en especifico en el smart contract(32 es el menor de by)
  console.log("Random Hex: ", web3.utils.randomHex(32))
  //Tambien podemos verificar si un valor es exadecimal, nos devuelve un booleano
  console.log("Is Hex: ", web3.utils.isHex(0x1912))
  //Tamvien podemos verificar si un valor es una direccion de Etheru, nos devuelve un booleano
  console.log("Is Address: ", web3.utils.isAddress(""))
  //Tambien podemos convertir un valor de hexadecimal a numero
  console.log("Hex to Number: ", web3.utils.HexToNumber("0x232"))
  //Tambien podemos convertir un valor de numero a exadecimal
  console.log("Number to Hex: ",web3.utils.HexToNumber)
  return (
    <div className="App">
      <Transacciones></Transacciones>
    </div>
  );
}

export default App;
