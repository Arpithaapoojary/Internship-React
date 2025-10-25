import React, { useState } from "react";

// Removed: import { PlusCircle, MinusCircle, DivideCircle, XCircle, Calculator, Hash } from 'lucide-react';

// Main component renamed to App for standard single-file setup
const App = () => {
  // 1. Use state for dynamic input values
  const [numA, setNumA] = useState(15);
  const [numB, setNumB] = useState(5);

  // 2. Perform calculations based on current state
  const a = parseFloat(numA) || 0; // Use parseFloat and default to 0 for safety
  const b = parseFloat(numB) || 0;

  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;

  // Handle division by zero
  const division = b === 0 ? "Error: Div by Zero" : a / b;

  // Utility component to display each operation row
  // Now uses a 'symbol' string instead of an 'icon: Icon' component
  const OperationRow = ({ symbol, operation, result, color }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg hover:ring-2 hover:ring-indigo-400 border border-gray-100">
      <div
        className={`flex items-center space-x-4 text-xl font-medium ${color}`}
      >
        {/* Replacement for Icon: Styled symbol */}
        <span
          className="text-3xl font-extrabold w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-inner border border-gray-200"
          style={{ lineHeight: 1 }}
        >
          {symbol}
        </span>
        <span>{operation}</span>
      </div>
      <div className="text-right">
        <p className="font-bold text-2xl sm:text-3xl text-indigo-600 mt-1">
          {/* Using toFixed(2) for numbers, or rendering the error string */}
          {typeof result === "number" ? result.toFixed(2) : result}
        </p>
      </div>
    </div>
  );

  // Input Field Component
  const NumberInput = ({ label, value, onChange, placeholder }) => (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold text-gray-700 flex items-center">
        {/* Replacement for Hash icon */}
        <span className="mr-1 text-indigo-400 font-bold text-lg">\#</span>
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-150 text-xl font-mono shadow-inner"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-start justify-center font-sans">
      <div className="w-full max-w-lg space-y-6">
        {/* Header Card */}
        <div className="bg-indigo-700 text-white p-6 rounded-2xl shadow-xl text-center">
          {/* Replacement for Calculator icon: Emoji */}
          <span
            className="text-4xl mx-auto mb-3"
            role="img"
            aria-label="calculator"
          >
            🧮
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interactive Calculator
          </h1>
          <p className="text-indigo-200 mt-2 text-sm sm:text-base">
            Enter two numbers to see the results in real-time.
          </p>
        </div>

        {/* Input Fields Section */}
        <div className="p-5 bg-white rounded-2xl shadow-lg border-t-4 border-indigo-400 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberInput
              label="First Number (A)"
              value={numA}
              onChange={(e) => setNumA(e.target.value)}
              placeholder="Enter Number A"
            />
            <NumberInput
              label="Second Number (B)"
              value={numB}
              onChange={(e) => setNumB(e.target.value)}
              placeholder="Enter Number B"
            />
          </div>
          <p className="text-center text-sm text-gray-500 pt-2">
            **A = {a}, B = {b}**
          </p>
        </div>

        {/* Operations Grid/List */}
        <div className="space-y-4">
          <OperationRow
            operation={`A + B (${a} + ${b})`}
            result={addition}
            symbol="+"
            color="text-green-600"
          />

          <OperationRow
            operation={`A - B (${a} - ${b})`}
            result={subtraction}
            symbol="−"
            color="text-red-600"
          />

          <OperationRow
            operation={`A * B (${a} * ${b})`}
            result={multiplication}
            symbol="×"
            color="text-yellow-600"
          />

          <OperationRow
            operation={`A / B (${a} / ${b})`}
            result={division}
            symbol="÷"
            color={b === 0 ? "text-red-600" : "text-blue-600"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
