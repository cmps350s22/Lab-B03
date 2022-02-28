//index database wrapper library called localbase
const db = new Localbase('census.db')

export class CensusRepo {
    addCensus(census) {
        try {
            db.collection('census').add(census)
        } catch (e) {
            console.log(e)
        }
    }
    updateCensus(updateCensus) {
        try {
            db.collection('census').doc({id:updateCensus.id}).update(updateCensus)
        } catch (e) {
            console.log(e)
        }
    }

    deleteCensus(id) {
        try {
            db.collection('census').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }
    getCensusById(id) {
        try {
            db.collection('census').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }
    getAllCensus(){
        try {
            db.collection('census').get()
        } catch (e) {
            console.log(e)
        }
    }
}
