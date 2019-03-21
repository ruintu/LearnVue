let vm = new Vue({
    el:'#app',
    data:{
        arr:[],
        var:'',
    },
    methods: {
        add(e) {
            if (e.keyCode === 13) {
                this.arr.unshift(this.val);
                this.val = '';
            }

        },
        remove(i) {
            this.arr = this.arr.filter((item, index) => index !== i);
        }
    }

});