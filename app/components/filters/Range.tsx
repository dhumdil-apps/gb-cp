type RangeProps = {
    min: number;
    max: number;
    selected: any;
    onChange: (e: any) => void;
};

const Range = ({ min, max, selected, onChange }: RangeProps) => (
    <input type="range" min={min} max={max} value={selected} onChange={onChange} className="range range-xs" />
);

export default Range;
