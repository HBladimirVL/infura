import web3 from "web3";

const Transacciones = () => {
  var web3 = new web3("HTTP://127.0.0.1:7545");
  const account1 = "";
  const account2 = "";

  const transaction = async () => {
    web3.eth.sendTransaction({
      from: account1,
      to: account2,
      value: web3.utils.toWei("5", "ether"),
    });
  };
  return (
    <>
      <h1>Transacciones</h1>
      <button onClick={transaction}>Transaccion</button>
    </>
  );
};

export default Transacciones;
