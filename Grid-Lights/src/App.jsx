import { useState } from "react";
import "./App.css";
import { Cell } from "./components/Cell";

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    // scalable config for our grid lights
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const handleDeactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const handleActivateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);
    // deactivate cells
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      handleDeactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => handleActivateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}
