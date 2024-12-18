import React, { useState } from 'react';
import { Equal, Delete, Plus, Minus, X, Divide } from 'lucide-react';

type Operation = '+' | '-' | '*' | '/' | null;

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumberClick = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperationClick = (op: Operation) => {
    setOperation(op);
    setFirstNumber(parseFloat(display));
    setNewNumber(true);
  };

  const calculate = () => {
    if (firstNumber === null || operation === null) return;
    
    const secondNumber = parseFloat(display);
    let result: number;

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const buttonClass = "h-14 flex items-center justify-center rounded-lg transition-colors hover:bg-opacity-80 active:bg-opacity-60 text-lg font-medium";

  return (
    <div className="w-full max-w-sm mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 bg-gray-900">
          <div className="text-right">
            <div className="text-gray-400 text-sm h-6">
              {firstNumber !== null ? `${firstNumber} ${operation}` : ''}
            </div>
            <div className="text-white text-4xl font-light tracking-wider">
              {display}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 grid grid-cols-4 gap-3">
          <button onClick={clear} className={`${buttonClass} bg-red-100 text-red-600 col-span-3`}>
            <Delete className="w-5 h-5" />
          </button>
          <button onClick={() => handleOperationClick('/')} className={`${buttonClass} bg-indigo-100 text-indigo-600`}>
            <Divide className="w-5 h-5" />
          </button>
          
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className={`${buttonClass} bg-gray-100 text-gray-900`}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('*')} className={`${buttonClass} bg-indigo-100 text-indigo-600`}>
            <X className="w-5 h-5" />
          </button>
          
          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className={`${buttonClass} bg-gray-100 text-gray-900`}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('-')} className={`${buttonClass} bg-indigo-100 text-indigo-600`}>
            <Minus className="w-5 h-5" />
          </button>
          
          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className={`${buttonClass} bg-gray-100 text-gray-900`}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('+')} className={`${buttonClass} bg-indigo-100 text-indigo-600`}>
            <Plus className="w-5 h-5" />
          </button>
          
          <button onClick={() => handleNumberClick('0')} className={`${buttonClass} bg-gray-100 text-gray-900 col-span-2`}>
            0
          </button>
          <button onClick={() => handleNumberClick('.')} className={`${buttonClass} bg-gray-100 text-gray-900`}>
            .
          </button>
          <button onClick={calculate} className={`${buttonClass} bg-indigo-600 text-white`}>
            <Equal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}