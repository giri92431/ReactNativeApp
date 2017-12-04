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
      if(value == 'category')
      {
        this.Data = require('./category.json');
      }
      if(value == 'search')
      {
        this.Data = require('./Search.json');
      }
     
   }
   createData () {
     return this.Data
   }
   
 
 }
 
 export default DataFactoryApi;