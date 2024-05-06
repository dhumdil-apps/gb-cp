type ToggleFiltersProps = {
    filtering: boolean;
    setFiltering: (filtering: boolean) => void;
};

const ToggleFilters = ({ filtering, setFiltering }: ToggleFiltersProps) => (
    <button className="btn btn-secondary btn-sm my-2 rounded-none" onClick={() => setFiltering(!filtering)}>
        <svg
            style={{ transform: filtering ? 'rotate(180deg)' : 'none' }}
            width={18}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 6v12m0 0-5-5m5 5 5-5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
        <span className="pe-4">Show filters</span>
    </button>
);

export default ToggleFilters;
