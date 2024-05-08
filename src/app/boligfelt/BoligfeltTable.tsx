import React from 'react';
import { boligfeltData } from '../_data/boligfelt';

const BoligfeltTable = () => (
  <table className="w-full gap-1.5">
    <thead>
      <tr className="sm:text-lg">
        <th className="text-left font-semibold">Tomt</th>
        <th className="text-right font-semibold">m²</th>
        <th className="text-right font-semibold">Pris</th>
        <th className="text-right font-semibold">Status</th>
      </tr>
    </thead>

    {boligfeltData
      .filter((house) => house.available)
      .map((house) => (
        <tr key={house.id} className="h-9 text-sm sm:text-base">
          <td
            className={`${house.available ? '' : 'text-slate-400'} text-left`}>
            {house.name}
          </td>
          <td className="text-right">{house.available ? house.kvm : '-'}</td>
          <td className="text-right">
            {house.available
              ? Intl.NumberFormat('nb', {
                  currency: 'NOK',
                  unitDisplay: 'long',
                  style: 'currency',
                  maximumFractionDigits: 0,
                }).format(house.price)
              : '-'}
          </td>
          <td
            className={`${house.available ? 'font-medium text-teal-300' : 'text-slate-400'} text-right`}>
            {house.available ? 'Tilgjengelig' : 'Solgt'}
          </td>
        </tr>
      ))}
  </table>
);

export default BoligfeltTable;
