import Filters from '@/app/components/filters/Filters';
import Products from '@/app/components/products/Products';
import { products } from '@/app/data/products';

export default async function Home() {
    return (
        <div className="min-h-screen p-12">
            <h1 className="w-full py-2 text-lg font-bold">Sports Nutrition</h1>

            <Filters filters={products.filters} />
            <Products items={products?.items ?? []} />
        </div>
    );
}
