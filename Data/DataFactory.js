class DataFactoryApi  {
    constructor(value) {
      if(value == 'Home')
      {
        this.Data = require('./HomeDataJson.json');
      }
      if(value == 'Subscribe')
      {
        this.Data = require('./subscribe.json');
      }
     
   }
   createData () {
     return this.Data
   }
   
 
 }
 
 export default DataFactoryApi;