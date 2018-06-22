<template>
    <div class="container">
        <ul>
            <li class="group" v-for="item in items">{{ item.group.letter }}
            <ul>
                <li class="teams" v-for="team in item.group.teams">{{ team.team.country }} ({{ team.team.fifa_code }})</li>
            </ul>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

  name: 'GroupResults',
    data: function (){
        return{
            items: null
        }
    },
    methods: {
        fetchData: function () {
            let self = this
            const API = 'http://worldcup.sfg.io/teams/group_results';

            fetch(API)
            .then((response) => { return response.json() })
            .then((data) => {
                self.items = data
                console.log(self.items)
            }).catch( error => { console.log(error); });
        }
    },

  mounted() {
    this.fetchData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
