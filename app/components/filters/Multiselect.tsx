import Select from 'react-select';
import type { FilterOptionsType } from '@/app/data/products';

type MultiselectProps = {
    options: FilterOptionsType[];
    onChange: (e: any) => void;
};

const Multiselect = ({ options, onChange }: MultiselectProps) => (
    <Select
        isMulti
        options={options.map((option) => ({
            value: option.value,
            label: option.name,
        }))}
        onChange={onChange}
    />
);

export default Multiselect;
