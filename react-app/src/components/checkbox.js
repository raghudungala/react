import React, { useState } from "react";

const initialData = ["India", "Pak", "USA"];

export default function CheckBox() {
  const [userData, setUserData] = useState(initialData);
  const [checkedItems, setCheckedItems] = useState(
    new Array(initialData.length).fill(false)
  );

  const handleSelect = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleDelete = (i) => {
    const updatedData = userData.filter((_, index) => i !== index);
    const updatedCheckedItems = checkedItems.filter((_, index) => i !== index);
    setUserData(updatedData);
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div>
      <ul>
        {userData.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => handleSelect(index)}
            />
            {item}
            {checkedItems[index] && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
