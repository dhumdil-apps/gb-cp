import type { FilterOptionsType } from '@/app/data/products';

type CheckboxProps = {
    options: FilterOptionsType[];
    selected: any;
    onChange: (e: any) => void;
};

const Checkbox = ({ options, selected, onChange }: CheckboxProps) => (
    <div className="flex space-x-2">
        {options?.map((option) => (
            <label key={option.value} className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value={option.value}
                    onChange={onChange}
                    checked={option.value === selected}
                />
                <span>{option.name}</span>
            </label>
        ))}
    </div>
);

export default Checkbox;
