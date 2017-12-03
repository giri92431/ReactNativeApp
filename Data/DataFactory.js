class DataFactoryApi  {
    constructor(value) {
      if(value == 'Home')
      {
        this.Data = require('./HomeDataJson.json');
      }
     
   }
   createData () {
     return this.Data
   }
   
 
 }
 
 export default DataFactoryApi;