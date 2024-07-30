import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [setInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput = (value);
  };

  const addItem = () => {
    if (setInput !== "") {
      const setInputItem = {
        id: Math.random(),

        value: setInput,
      }
      setList([...list, setInputItem]);

      setUserInput("");
    }
  };

  return (
    <main className="max-w-screen flex flex-col items-center justify-between p-6">
      <div>
        <h1 className="text-bold text-2xl">Todo List</h1>
      </div>
      <div className="p-6 flex gap-3">
        <Input 
        type="text"
        placeholder="Add todo ..."
        value={setInput}
        onChange={(item) => updateInput(item.target.value)
        }
        />
        <Button onClick={addItem}>
          Add
        </Button>
      </div>
    </main>
  );
}
