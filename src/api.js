const TEACHDB = "TeachDB"

function getLocalDB(){
    if(!localStorage.getItem(TEACHDB)){
        localStorage.setItem(TEACHDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(TEACHDB))
}

function updateDB(db){
    localStorage.setItem(TEACHDB, JSON.stringify(db))

}

function addTeach(teach){
    const db = getLocalDB()

    teach.id = Date.now()+""
    db.push(teach)

    updateDB(db)
}

function updateTeach(teach){
    const db = getLocalDB()
    const updateDb = db.map(function(curTeach){
        if(curTeach.id == teach.id){
            return{
                matricule: teach.matricule,
                nom: teach.nom,
                tauxHoraire: teach.tauxHoraire,
                nbHeure: teach.nbHeure,
                id: teach.id
            }
        }
        return curTeach
    })

    updateDB(updateDb)
}

function deleteTeach(teach){
    const db = getLocalDB()
    const updateDb = db.filter(function(curTeach){
        return curTeach.id != teach.id
    })  

    updateDB(updateDb)
}

function getTeach(id){
    const db = getLocalDB()
    var filterDB = db.filter((data)=> data.id == id)
    if(filterDB.length > 0){
        return filterDB[0]
    }
    return null
}