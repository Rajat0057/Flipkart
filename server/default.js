
import {products} from './constants/product.js';
import {productsScehma} from './modal/product-schema.js';

export const DefaultData = async () => {
    try {

       await productsScehma.insertMany(products)
        console.log("data inseted succesfully")

    } catch (err) {
        console.log("error while when insterting", err);
    }

}

