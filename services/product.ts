// Importa os dados locais
import { data } from '../data';

// Retorna todos os produtos
export const getAllProducts = () => {
    return data.products;
}

// Retorna o produto com o ID informado
export const getProductById = (id: number) => {
    return data.products.find(item => item.id === id);
}

// Retorna todos os produtos de uma categoria específica
export const getProductsByCategory = (idCategory: number) => {
    return data.products.filter(item => item.idCategory === idCategory);
}
