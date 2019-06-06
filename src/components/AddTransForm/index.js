import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function AddTransForm({ borrowerName, backDropClickHandler, lentAmount, dueDate, borrowerEmail,messageToBorrower, handleAddTransactionInputs, handleAddTransFormSubmit }) {
  return (

    <div>

    <form>
      <div className="form-group">
      <div>
<label>
          <strong>Lend to: </strong>
        </label>
        </div>
        <div>
        <input
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        data-gramm="false"
          className="formcontrol"
          id="lendtoid"
          type="email"
          value={borrowerEmail}
          placeholder="Type Borrower's Email or Username"
          name="borrowerEmail"
          onChange={handleAddTransactionInputs}
          required
        />
        </div>

      <div>
        <label>
          <strong>Borrower Name</strong>
        </label>
        </div>

        <div>
        <input
          className="formcontrol"
          id="amountid"
          type="text"
          value={borrowerName}
          placeholder="Borrower Name"
          name="borrowerName"
          onChange={handleAddTransactionInputs}
          required
        />
        </div>

        

        <div>
        <label>
          <strong>Amount</strong>
        </label>
        </div>

        <div>
        <input
          className="formcontrol"
          id="amountid"
          type="text"
          value={lentAmount}
          placeholder="Enter Amount"
          name="lentAmount"
          onChange={handleAddTransactionInputs}
          required
        />
        </div>

        <div>
<label>
          <strong>Due Date</strong>
        </label>
        </div>

        <div>
        <input
          className="formcontrol"
          id="duedateid"
          type="date"
          value={dueDate}
          // placeholder="Last Name"
          name="dueDate"
          onChange={handleAddTransactionInputs}
          required
        />
        </div>



        <div>
<label>
          <strong>Remarks</strong>
        </label>
        </div>
        <div>
        <textarea
          className="form-control"
          id="notemsgid"
          type="text area"
          value={messageToBorrower}
          placeholder="write here.."
          name="messageToBorrower"
          onChange={handleAddTransactionInputs}
          required
        />
        </div>


      

      <div className="btnwrap1awrap">
<button
          onClick={handleAddTransFormSubmit}
          type="submit"
          className="btnwrap1addemp"
        >
          Submit
        </button>
        <button className="btnwrap1addemp" onClick={() => backDropClickHandler()}>Close</button>


      </div>
      </div>

    </form>

  
    </div>
  );
}

export default AddTransForm;
