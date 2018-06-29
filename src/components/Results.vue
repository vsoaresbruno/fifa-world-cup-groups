<template>
    <div class="container">
        <ul>
            <li class="group" v-for="result in results" :key="result.id">{{ result.country }} Wins: {{ result.wins }}</li>
        </ul>
    </div>
</template>

<script>

import API from '../services/api-class';

export default {

    name: 'Results',
    data: function (){
        return{
            loading: false,
            results: null,
        }
    },
    methods: {

        loadData: function () {
            let self = this;
            const api = new API({url:'http://worldcup.sfg.io/teams'});

            api.createEntity({ name: 'results' })

            api.endpoints.results.getAllResults()
            .then(({ data }) => {
                self.results = data;
                console.log(data)
            })

        }
    },

  mounted() {
    this.loadData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
ul > li {
    display: inline-block;
}
.container {
    margin: 0 auto;
}
.group {
    width: 25%;
    color: #42b983;
    font-weight: bold;
    margin-bottom: 25px;
    /* -webkit-box-shadow: 0px 0px 20px 1px rgba(166,166,166,1);
    -moz-box-shadow: 0px 0px 20px 1px rgba(166,166,166,1);
    box-shadow: 0px 0px 20px 1px rgba(166,166,166,1);
    border-radius: 50px; */
}

.teams {
    color: #333;
    font-weight: normal;
    display: block;
}
</style>
