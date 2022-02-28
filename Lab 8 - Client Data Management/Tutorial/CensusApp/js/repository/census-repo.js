//index database wrapper library called localbase
const db = new Localbase('census.db')

export class CensusRepo {
    addCensus(census) {
        try {
            return db.collection('census').add(census)
        } catch (e) {
            console.log(e)
        }
    }
    updateCensus(updateCensus) {
        try {
            return db.collection('census').doc({id:updateCensus.id}).update(updateCensus)
        } catch (e) {
            console.log(e)
        }
    }
    deleteCensus(id) {
        try {
            return db.collection('census').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }
    getCensusById(id) {
        try {
            return db.collection('census').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }
    getAllCensus(noOfRowsDD){
        try {
            return db.collection('census').limit(noOfRowsDD).get()
        } catch (e) {
            console.log(e)
        }
    }
}
