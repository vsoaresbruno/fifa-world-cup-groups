import axios from 'axios';

const API = 'http://worldcup.sfg.io/';

export default {
    results(endpoint) {
        return {
            getAllResults: () => axios.get(`http://worldcup.sfg.io/${endpoint}`)
        };
    }
    // getPost(id) {
    //     return this.execute('get', `/posts/${id}`);
    // },
    // createPost(data) {
    //     return this.execute('post', '/posts', data);
    // },
    // updatePost(id, data) {
    //     return this.execute('put', `/posts/${id}`, data);
    // },
    // deletePost(id) {
    //     return this.execute('delete', `/posts/${id}`);
    // }
};
