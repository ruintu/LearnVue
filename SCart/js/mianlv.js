let vm = new Vue({
    el:'#app',
    computed:{ //不能喝data 与 methods重名
        checkAll:{
            get(){
                return this.products.every(p=>p.isSelected);
            },
            set(val){
                this.products.forEach(p => p.isSelected = val);
            }
        }
    },
    filters:{
        toFixed(input ,param1){
            return "￥"+input.toFixed(param1); //input 代表管道符前面的内容 param1是传入的第一个参数
        }
    },

    created(){//数据初始化后调用thisz只想vm实例
        //promise 解决回调问题
        this.getData();

    },


    data:{

        products:[],
    },

    methods:{
        getData(){
            axios.get('./cars.json').then(
                res=>{//sucesses
                    this.products = res.data;
                    this.checkOne();
                },err=>{//error
                    console.log(err);
                });

        },
        remove(p){ //代表当前点击的这一项
            this.products = this.products.filter(item=>item!==p);
        },
        sum(){
            return this.products.reduce((prev,next)=>{
                if(!next.isSelected) return prev;
                return prev+next.productPrice*next.productCount
            },0)
        },

    }



});