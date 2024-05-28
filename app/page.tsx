import Filters from '@/app/components/filters/Filters';
import Products from '@/app/components/products/Products';
import IntroPlaceholder from '@/app/components/products/IntroPlaceholder';
import PaginationPlaceholder from '@/app/components/products/PaginationPlaceholder';
import { getProducts } from '@/app/data/products';

export default async function Home() {
    const products = await getProducts();

    return (
        <div className="min-h-screen">
            <IntroPlaceholder />
            <Filters filters={products.filters ?? []} />
            <Products items={products?.items ?? []} />
            <PaginationPlaceholder />
        </div>
    );
}
