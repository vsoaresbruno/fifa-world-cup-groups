import axios from 'axios';

export default class API {
    constructor({ url }) {
        this.url = url;
        this.endpoints = {};
    }

    createEntity(entity) {
        console.log(entity);
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach(this.createEntity.bind(this));
    }

    createBasicCRUDEndpoints({ name }) {
        var endpoints = {};

        const resourceURL = `${this.url}/${name}`;

        endpoints.getAllResults = ({ query } = {}) =>
            axios.get(resourceURL, { params: { query } });

        endpoints.getOne = ({ id }) => axios.get(`${resourceURL}/${id}`);

        return endpoints;
    }
}

// export default {
//     results(endpoint) {
//         return {
//             getAllResults: () => axios.get(`http://worldcup.sfg.io/${endpoint}`)
//         };
//     }
//     // getPost(id) {
//     //     return this.execute('get', `/posts/${id}`);
//     // },
//     // createPost(data) {
//     //     return this.execute('post', '/posts', data);
//     // },
//     // updatePost(id, data) {
//     //     return this.execute('put', `/posts/${id}`, data);
//     // },
//     // deletePost(id) {
//     //     return this.execute('delete', `/posts/${id}`);
//     // }
// };
