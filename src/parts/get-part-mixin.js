export default{
    created(){
        this.$store.dispatch('robots/getParts');
    },
    computed: {
        parts(){
            return this.$store.state.robots.robots.parts || {
                heads:[],
                arms:[],
                torsos:[],
                bases:[]
            };
        }
    }
};