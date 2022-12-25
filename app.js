var app = Vue.createApp({
    data(){
        return {
            msg: "welcome to Vue Js Practice ",
            practiceInfo:{
                name: "Vue Js 3 Practice",
                github : "https://github.com/nirjonroy",
            },
            count:0
        };

    }, 
    methods : {
        getCurrentTime(){
            let ct = new Date();
            return new Date();
        },
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
});

app.mount("#app");