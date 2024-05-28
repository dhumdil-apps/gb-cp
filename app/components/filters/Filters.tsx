'use client';

import { useState } from 'react';
import type { FiltersType } from '@/app/data/products';
import ToggleFilters from './ToggleFilters';
import Multiselect from './Multiselect';
import Checkbox from './Checkbox';
import Range from './Range';

type FiltersProps = {
    filters: FiltersType[];
};

const Filters = ({ filters }: FiltersProps) => {
    const [filtering, setFiltering] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({});

    const updateFilters = (filter: FiltersType, value: any) => {
        console.log(filter.code, value);
        const selectedFiltersLocal = { ...selectedFilters };

        switch (filter.type) {
            case 'multiselect':
                selectedFiltersLocal[filter.code] = value ?? {};
                break;

            case 'checkbox':
                selectedFiltersLocal[filter.code] = value ?? false;
                break;

            case 'range':
                selectedFiltersLocal[filter.code] = value ?? 0;
                break;

            default:
                break;
        }

        setSelectedFilters((prev) => ({ ...prev, ...selectedFiltersLocal }));

        const searchParams = new URLSearchParams();

        Object.entries(selectedFiltersLocal).forEach(([k, v]) => {
            if (typeof v === 'object') {
                const val = v.map((val: any) => val.value).join(',');

                if (val) {
                    searchParams.set(`${k}[]`, val);
                }
            } else {
                searchParams.set(k, v);
            }
        });

        setFiltering(false);

        // TODO: Filter products based on params (call Rest API and append params to URL)
        alert(searchParams.toString());
    };

    return (
        <div>
            <ToggleFilters filtering={filtering} setFiltering={setFiltering} />

            {filtering && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                    {filters.map(
                        (filter) =>
                            filter.code &&
                            filter.global_name && (
                                <div key={filter.code} className="grid grid-cols-2">
                                    <label className="text-sm font-bold">{filter.global_name}</label>

                                    {filter.type === 'multiselect' && (
                                        <Multiselect
                                            options={filter.options ?? []}
                                            onChange={(e) => updateFilters(filter, e)}
                                        />
                                    )}

                                    {filter.type === 'checkbox' && (
                                        <Checkbox
                                            options={filter.options ?? []}
                                            selected={selectedFilters?.[filter.code]}
                                            onChange={(e) => updateFilters(filter, e.target.checked)}
                                        />
                                    )}

                                    {filter.type === 'range' && (
                                        <Range
                                            min={filter.min ?? 0}
                                            max={filter.max ?? 0}
                                            selected={selectedFilters?.[filter.code]}
                                            onChange={(e) => updateFilters(filter, e.target.value)}
                                        />
                                    )}
                                </div>
                            ),
                    )}
                </div>
            )}
        </div>
    );
};

export default Filters;
