import './assets/main.css';

const checkValue = (obj)=>{
    let isEmpty = false;
    for(const prop in obj){
        if(obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty
}

const App = {
    data(){
        return{
            teachs: {
                matricule: "",
                nom: "",
                tauxHoraire: "",
                nbHeure: ""
            },
            localDB: []
        }
    },

    mounted(){
        this.submitTeach();
        this.localDB = getLocalDB();
        deleteTeach(teach);
        updateTeach(teach);
    },

    methods:{
        submitTeach(){
            if(!checkValue(this.teachs)){
                addTeach(this.teachs)
                console.log("c ok")
                this.teachs = {
                    matricule: "",
                    nom: "",
                    tauxHoraire: "",
                    nbHeure: ""
                };
                this.localDB = getLocalDB();
            }
        },
        deleteTeach(teach) {
            console.log("c supp")
            deleteTeach(teach);
            this.localDB = getLocalDB();
        },
        updateTeach(teach) {
            console.log("c maj")
            updateTeach(teach);
            this.localDB = getLocalDB();
        }
    }
}

Vue.createApp(App).mount("#app")