type RatingProps = {
    score: number;
    count: number;
};

const Rating = ({ score, count }: RatingProps) => (
    <div className="flex gap-4">
        <svg width="120" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="a" maskUnits="userSpaceOnUse" x="2" y="2" width="116" height="19">
                <use href="#star" />
            </mask>
            <rect x="0" y="0" width={`${score}%`} height="100%" fill="#ff4100" mask="url(#a)" />
        </svg>

        <div className="text-xs font-bold text-slate-400">
            {score} % ({count})
        </div>
    </div>
);

export default Rating;
