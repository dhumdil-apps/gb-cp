function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-semibold text-primary">
            <b>{children}</b>
        </span>
    );
}

const NavSkeleton = () => (
    <div>
        <h1 className="w-full py-2 text-lg font-bold">Sports Nutrition</h1>
        <p className="text-sm">
            <b>Sports Nutrition</b> is a category of products that covers dozens of different types of dietary
            supplements for athletes. These include <Highlight>proteins</Highlight>, <Highlight>amino acids</Highlight>,{' '}
            <Highlight>weight gainers and carbohydrates</Highlight>, <Highlight>fat burners</Highlight>,{' '}
            <Highlight>joint supplements</Highlight>,{' '}
            <Highlight>pre-workout and testosterone support supplements</Highlight>, <Highlight>vitamins</Highlight> and{' '}
            <Highlight>minerals</Highlight>.
        </p>
        <p className="pt-4 text-sm">
            The category is intended <b>for strength athletes, runners, cyclists</b> and all the{' '}
            <b>fans of a healthy lifestyle</b>. And we are not talking about just the physical sports, because{' '}
            <Highlight>gamers</Highlight> and e-sport fans will also come to appreciate such supplements. Nutrition in
            sports or e-sports is one of the main pillars, thanks to which you can achieve your goals much more easily.{' '}
            <span className="cursor-pointer text-primary">Show more</span>
        </p>
    </div>
);

export default NavSkeleton;
