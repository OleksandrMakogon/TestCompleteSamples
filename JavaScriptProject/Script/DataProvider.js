var Constants = require("Constants");

class DataProvider {
  constructor(connectionString) {
    try {
      this.connection = ADO.CreateConnection();
      this.connection.ConnectionString = connectionString;
      if (connectionString.includes('.accdb') || connectionString.includes('.mdb')){
        this.dbType = 'MSAccess'
      }
      else if (connectionString.includes('.xlsx') || connectionString.includes('.xls')) {
        this.dbType = 'Excel'
      }
      else if (connectionString.includes('SQl')) {
        this.dbType = 'SQL'
      }
      else  {
        this.dbType = 'CSV'
      }      
      
      Log.Message('connection', 'Conn String: ' + this.connection.ConnectionString + 
                                '\nDB Type: ' + this.dbType)
    
      // Activate the connection
      this.connection.Open();
    }
    catch(e){
      Log.Error('Exception during open connection.', e)
    }
  }
  
  execute(query) {
    try {
      if (this.dbType == 'CSV'){
        //add .csv to table name
        query = query.replace(' from ', ' From ').replace(' FROM ', ' From ')
        let tableName = query.split(' From ')[1].split(' ')[0]
        query = query.replace(' From ' + tableName, ' From ' + tableName+'.csv')        
      }
      else if (this.dbType == 'Excel'){
        //add $[] to Table name
        query = query.replace(' from ', ' From ').replace(' FROM ', ' From ')
        let tableName = query.split(' From ')[1].split(' ')[0]
        query = query.replace(' From ' + tableName, ' From [' + tableName+'$]')
      }
      
      Log.Message('Execute query.', query)
      return this.connection.Execute(query);
    }
    catch(e){
      Log.Error('Exception during query execution.', e)
      return null
    }
  }
  
  closeConnection(){
    // Closes the query
    this.connection.Close();
  }
}

module.exports.getDataProvider = function (connection) {
 if (connection == undefined) connection = Constants.DBConnections.CurrentConnection
 return new DataProvider(connection)
}
