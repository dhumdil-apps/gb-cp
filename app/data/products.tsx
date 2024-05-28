const PRODUCTS_API = 'https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416';

// TODO: validate data with zod
export const getProducts = async () => {
    try {
        const response = await fetch(PRODUCTS_API, {
            next: { revalidate: 3600 },
            headers: {
                'content-type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(response);
            return {} as unknown as ProductsType;
        }

        return response.json() as unknown as ProductsType;
    } catch (error) {
        console.error(error);
        return {} as unknown as ProductsType;
    }
};

export const item: ItemType = {
    id: 29735,
    sku: '28324 28324-2-vanilla-ice-cream 28324-1-chocolate-milkshake 28324-3-1000g-white-chocolate-coconut 28324-4-1000g-unflavored 28324-5-2000g-chocolate-milkshake 28324-6-2000g-unflavored 28324-7-2000g-vanilla-ice-cream 28324-8-2000g-white-chocolate-coconut 28324-9-1000g-saltedcaramel 28324-10-2000g-saltedcaramel 28324-11-1000g-blueberryyoghurt 28324-12-2000g-blueberryyoghurt',
    name: 'Just Whey - GymBeam',
    price: 23.95,
    formatted_price: '23,95 €',
    product_url: 'https://gymbeam.sk/protein-just-whey-1000-g-gymbeam.html?___store=gymbeamsk',
    image: 'https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png',
    thumbnail: 'https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png',
    small_image: 'https://gymbeam.sk/media/catalog/product/j/u/just_whey_salted_caramel_1_kg_gymbeam_1.png',
    reviews_count: 1536,
    rating_summary: 93,
    saleable: true,
    form_inputs: '',
    form_action: '',
    labels: [
        {
            type: 1,
            label_text: '',
            image: 'https://gymbeam.sk/media/amasty/amlabel/1vegan-label4.png',
            image_size: '18',
            position: 3,
            style: '',
        },
    ],
};

export type ItemType = {
    id: number;
    sku: string;
    name: string;
    price: number;
    formatted_price: string;
    product_url: string;
    image: string;
    thumbnail: string;
    small_image: string;
    reviews_count: number;
    rating_summary: number;
    saleable: boolean;
    form_inputs: string;
    form_action: string;
    labels: {
        type: number;
        label_text: string;
        image: string;
        image_size: string;
        position: number;
        style: string;
    }[];
};

export type FilterOptionsType = {
    name: string;
    slug: string | null;
    value: string;
    count: number;
};

export type FiltersType = {
    name: string;
    code: string;
    global_name: string;
    display_mode?: string;
    type: 'multiselect' | 'checkbox' | 'range';
    position?: string;
    min?: number;
    max?: number;
    options?: FilterOptionsType[];
};

export type ProductsType = {
    items: ItemType[];
    filters: FiltersType[];
    meta: {
        pages: [];
        current_page: number;
        last_page: number;
        from: number;
        to: number;
        per_page: number;
        total: number;
        next_url: null;
        next_page: null;
    };
};
