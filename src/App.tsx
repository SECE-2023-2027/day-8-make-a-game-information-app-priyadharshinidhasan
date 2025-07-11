import { useState } from "react";
import Alert from "./component/Alert.tsx";
import Button from "./component/Button.tsx";
import ListGroup from "./component/ListGroup.tsx";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          My Alert
        </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        my button
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
