const NavSkeleton = () => (
    <nav className="hidden min-w-[215px] flex-col items-center justify-start md:flex">
        <div className="join join-vertical w-full bg-secondary-content">
            <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion" defaultChecked />
                <div className="collapse-title text-sm font-bold">Sports Nutrition</div>
                <div className="collapse-content">
                    <ul className="flex flex-col gap-3 px-4 text-sm">
                        <li>Proteins</li>
                        <li>Fat Burners</li>
                        <li>Weight Gainers & Carbohydrates</li>
                        <li>Joint Supplements</li>
                        <li>Amino Acids</li>
                        <li>Vitamins</li>
                        <li>Minerals</li>
                        <li>Healthy Fats</li>
                        <li>Creatine</li>
                        <li>Other Supplements</li>
                        <li>Nutritional Supplements for Your Goals</li>
                        <li>Anabolizers & Pre-Workout Supplements</li>
                    </ul>
                </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title text-xl font-medium">Healthy Foods</div>
                <div className="collapse-content">
                    <ul className="flex flex-col gap-3 px-4 text-sm">
                        <li>Fitness Food</li>
                        <li>Grains & Cereals</li>
                        <li>Cooking Ingredients</li>
                        <li>Flavourings & Sweeteners</li>
                        <li>Snacks</li>
                        <li>Drinks</li>
                    </ul>
                </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title text-xl font-medium">Sportswear</div>
                <div className="collapse-content">
                    <ul className="flex flex-col gap-3 px-4 text-sm">
                        <li>Women's Sportswear</li>
                        <li>Men's Sportswear</li>
                    </ul>
                </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion" />
                <div className="collapse-title text-xl font-medium">Workout Accessories</div>
                <div className="collapse-content">
                    <ul className="flex flex-col gap-3 px-4 text-sm">
                        <li>Home Workout</li>
                        <li>Fitness & Exercise Equipment</li>
                        <li>Bags & Backpacks</li>
                        <li>Activity-Based Accessories</li>
                        <li>Rehabilitation Aids</li>
                        <li>Other Categories</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

export default NavSkeleton;
