import React from 'react';
import { boligfeltData } from '../_data/boligfelt';
import Link from 'next/link';

const BoligfeltTable = () => (
  <div className="flex w-full items-center justify-center">
    <table className="w-full max-w-[500px] gap-1.5">
      <caption className="mb-3 caption-top text-sm">
        Tabellen viser tomtene som er tilgjengelige for salg.
      </caption>
      <thead>
        <tr className="sm:text-lg">
          <th className="text-left font-semibold">Tomt</th>
          <th className="text-right font-semibold">m²</th>
          <th className="text-right font-semibold">Pris</th>
          <th className="text-right font-semibold">Status</th>
        </tr>
      </thead>
      <tbody>
        {boligfeltData.map((house) => (
          <tr key={house.id} className="h-9 text-sm sm:text-base">
            <td
              className={`${house.available ? '' : 'text-slate-400'} text-left`}>
              <p className="font-medium">{house.name}</p>
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
              <Link
                href={`/tomter/${house.id}`}
                className="font-bold underline underline-offset-2">
                {house.available ? 'Til salgs' : 'Solgt'}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BoligfeltTable;
