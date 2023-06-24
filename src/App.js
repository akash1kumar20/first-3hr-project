import Form from "./components/Form";
import "./App.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const dataHandler = (pPrice, pName, pCategory, pID) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        {
          id: pID,
          name: pName,
          price: pPrice,
          category: pCategory,
          key: Math.random().toString(),
        },
      ];
    });
  };
  const deleteProduct = (productId) => {
    setUsersList(usersList.filter((product) => product.id !== productId));
  };
  return (
    <div className="App">
      <Form onSaveData={dataHandler} />
      <Display users={usersList} onDeleteProduct={deleteProduct} />,
    </div>
  );
}

export default App;
