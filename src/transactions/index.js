import React, { useState } from 'react';
import TransactionTable from './TransactionTable';

/**
 * Shows the list of transactions and allows the user to create transactions
 *
 * @component
 * @example
 * <TransactionPage />
 */
export default function TransactionPage() {
  // Local State - is a transaction currently being created, for passing to the TransactionTable
  const [isCreating, setisCreating] = useState(false);
  const handleStopCreating = () => {
    setisCreating(false);
  };

  // JSX
  return (
    <>
      <div className="row mb-5 mt-4">
        <div className="col">
          <h3 className="mt-1">Transactions</h3>
        </div>
        <div className="col text-end">
          <button className="btn btn-info" type="button" onClick={() => setisCreating(true)}>New Transaction</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <TransactionTable isCreating={isCreating} onStopCreating={handleStopCreating} />
        </div>
      </div>
    </>
  );
}
