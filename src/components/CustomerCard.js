import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="mt-6">{customer.content}</p>
    <div className="flex flex-row-reverse items-center mt-8">
      <img
        className="w-12 h-12 ml-4 rounded-full hidden"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div className="text-right">
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
