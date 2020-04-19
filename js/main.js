new Vue({
    el: '#app',
    data: {
        title: 'Zone API Fetched Viewer',
        desc: 'Enter an API URL below and hit enter',
        items: [],
        feed: 'https://pokeapi.co/api/v2/pokemon',
        show: true
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$http.get(this.feed).then(response => {
                this.items = response.body;
            });
        },
        changeHandler(event) {
            this.feed = event.target.value;
            this.fetchData();
            
        },
        toTop() {
            window.scrollTo(0,0);
        }
    }
});