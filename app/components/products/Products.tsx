import type { ItemType, ProductsType } from '@/app/data/products';
import AddToBasket from '@/app/components/products/AddToBasket';
import Rating from '@/app/components/products/Rating';

type ProductsProps = {
    items: ItemType[];
};

const Products = ({ items }: ProductsProps) => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items?.map((item) => (
            <a href={item.product_url} key={item.id} className="group card">
                <div className="relative">
                    <img src={item.image} alt={item.name} className="h-48 w-full object-contain" loading="lazy" />
                    <AddToBasket />
                </div>
                <div className="flex h-full flex-col gap-2 py-4">
                    <div className="mb-auto">
                        <strong className="group-hover:underline">{item.name}</strong>
                    </div>
                    <Rating score={item.rating_summary} count={item.reviews_count} />
                    <p className="text-sm font-bold text-primary">{item.formatted_price}</p>
                </div>
            </a>
        ))}
    </div>
);

export default Products;
