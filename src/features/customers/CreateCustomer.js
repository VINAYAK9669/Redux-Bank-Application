import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

import styles from "./CreateCustomer.module.css";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2 className={styles.header}>Create new customer</h2>

      <div className="inputs">
        <div className={styles.container}>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.input}
          />

          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className={styles.input}
          />

          <button onClick={handleClick} className={styles.button}>
            Create new customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customer;
