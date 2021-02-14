let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        //GET /categories - endpoint
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        return json;
    }, 
    getProducts: async (category, page, search) => {
        //GET /products ([search, page, category ]) - endpoint
        let fields = {};
        
        if(category !== 0) {
            fields.category = category;
        }

        if(page > 0) {
            fields.page = page;
        }

        if(search !== '') {
            fields.search = search;
        }
        
        //criaçao da queryString
        let queryString = new URLSearchParams(fields).toString();
        
        const res = await fetch(BASE+'/products?'+queryString);
        const json = await res.json();
        return json;
    }
};