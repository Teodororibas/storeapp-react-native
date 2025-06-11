// Importa os dados locais
import { data } from '../data';

// Retorna todas as categorias
export const getAllCategories = () => {
    return data.categories;
};

// Retorna a categoria com o ID informado
export const getCategoryById = (id: number) => {
    return data.categories.find(item => item.id === id);
};
