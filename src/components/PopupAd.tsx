import React, { useEffect, useState } from 'react';
import adv from '../data/advertisement.png';

const PopupAd: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
  // Do nothing, popup won't be shown
}, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-11/12 p-4">
        <button 
          className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-xl font-bold"
          onClick={() => setShow(false)}
        >
          ×
        </button>
        <img
          src={adv}
          alt="Special Offer"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default PopupAd;
