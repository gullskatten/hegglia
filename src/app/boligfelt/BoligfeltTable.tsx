'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { boligfeltData } from './BoligfeltChart';

const BoligfeltTable = () => (
  <Accordion.Root
    className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible>
    <Accordion.Item
      value="item-1"
      className="mt-px  w-full overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-teal-600">
      <Accordion.Trigger className="group flex h-[45px] w-full flex-1 cursor-default items-center justify-between bg-white px-5 font-semibold leading-none text-teal-800 shadow-[0_1px_0] shadow-teal-900 outline-none hover:bg-teal-50">
        Oversikt over tomtene
        <ChevronDownIcon
          className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
      <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-white px-3 py-3">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-semibold">Tomt</th>
              <th className="text-right font-semibold">m²</th>
              <th className="text-right font-semibold">Pris</th>
              <th className="text-right font-semibold">Status</th>
            </tr>
          </thead>

          {boligfeltData.map((house) => (
            <tr key={house.id}>
              <td
                className={`${house.available ? '' : 'text-slate-400'} text-left`}>
                {house.name}
              </td>
              <td className="text-right">
                {house.available ? house.kvm : '-'}
              </td>
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
                className={`${house.available ? 'font-medium text-teal-700' : 'text-slate-400'} text-right`}>
                {house.available ? 'Til salgs' : 'Solgt'}
              </td>
            </tr>
          ))}
        </table>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default BoligfeltTable;
