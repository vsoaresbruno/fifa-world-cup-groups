<template>
    <div class="container">
        <h1>TOMORROW'S MATCHES</h1>

        <ul>
            <li class="group" v-for="match in matches" :key="match.id">
                <span>{{ match.stage_name }} - {{ match.location }} {{ match.datetime | moment("ddd, ha") }}</span>
                {{ match.away_team_country }} VS {{ match.home_team_country }}
            </li>
        </ul>

    </div>
</template>

<script>

import API from '../services/api-class';

export default {

    name: 'MatchesTomorrow',
    data: function (){
        return{
            loading: false,
            matches: null,
        }
    },
    methods: {

        loadData: function () {
            let self = this;
            const api = new API({url:'https://worldcup.sfg.io/matches'});

            api.createEntity({ name: 'tomorrow' })

            api.endpoints.tomorrow.getAllResults()
            .then(({ data }) => {
                self.matches = data;
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
}

.group span{
    font-weight: normal;
    display: block;
    color: #333;
}

.teams {
    color: #333;
    font-weight: normal;
    display: block;
}
</style>
