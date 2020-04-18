new Vue({
    el: '#app',
    data: {
        title: 'Zone API Fetched Viewer',
        desc: 'Enter an API URL below and hit enter',
        items: [],
        feed: 'https://pokeapi.co/api/v2/pokemon'
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            this.$http.get(this.feed).then(response => {
                this.items = response.body;
            });
        },
        changeHandler: function(event) {
            this.feed = event.target.value;
            this.fetchData();
            
        }
    }
});