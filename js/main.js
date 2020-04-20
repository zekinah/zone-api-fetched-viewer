new Vue({
    el: '#app',
    data: {
        title: 'Zone API Fetched Viewer',
        desc: 'Enter an API URL below and hit enter',
        feed: 'https://jsonplaceholder.typicode.com/users',
        items: [],
        show: true
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const { data } = await axios.get(this.feed);
            this.items = data;
        },
        changeHandler(e) {
            this.feed = e.target.value;
            this.fetchData();
        },
        toTop() {
            window.scrollTo(0,0);
        }
    }
});