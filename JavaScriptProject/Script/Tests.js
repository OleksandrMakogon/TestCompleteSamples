var Notepad = require("Notepad")
var DataProvider = require("DataProvider")

function InputText(text){
  Log.AppendFolder('Test: InputText: ' + text);
  notepad = new Notepad.Notepad();
  if (!notepad.process.Exists){
    Log.Error('Notepad app not found.', '', 300, '', Sys.Desktop)
    Log.PopLogFolder()
    return false
  }
  notepad.clearContent();
  notepad.enterText(text); 
  Log.PopLogFolder();
}
  
//Test1: Input Text from DDT
//@Smoke
function EnterText(){
  //throw new Error("User Exception.");
  dataProvider = DataProvider.getDataProvider()
  query = "select * from Smoke where CaseName like 'EnterText%'"
  recSet = dataProvider.execute(query)    
  
  if(recSet == null || recSet.EOF){
    Log.Warning("Result of the query is empty.", query);
    return false
  }
    
  recSet.MoveFirst()  
  while (!recSet.EOF) {
    InputText(recSet.Fields.Item("Param1").Value)    
    recSet.MoveNext();
  }
  
  dataProvider.closeConnection()
}

//Test2: Input digits from DDT
//@Smoke
function EnterDigits(){
  dataProvider = DataProvider.getDataProvider()
  query = "select * from Smoke where CaseName like 'EnterDigit%'"
  recSet = dataProvider.execute(query)    
  
  if(recSet.EOF){
    Log.Warning("Result of the query is empty.", query);
    return false
  }
    
  recSet.MoveFirst()  
  while (!recSet.EOF) {
    InputText(recSet.Fields.Item("Param1").Value)    
    recSet.MoveNext();
  }
  
  dataProvider.closeConnection()
}

//Test3: Input Text from DDT
//@Regression
function EnterText2(){
  dataProvider = DataProvider.getDataProvider()
  query = "select * from Regression where CaseName like 'EnterText%'"
  recSet = dataProvider.execute(query)    
  
  if(recSet == null || recSet.EOF){
    Log.Warning("Result of the query is empty.", query);
    return false
  }
    
  recSet.MoveFirst()  
  while (!recSet.EOF) {
    InputText(recSet.Fields.Item("Param1").Value)    
    recSet.MoveNext();
  }
  
  dataProvider.closeConnection()
}

//Test4: Input Digits from DDT
//@Regression
function EnterDigits2(){  
  dataProvider = DataProvider.getDataProvider()
  query = "select * from Regression where CaseName like 'EnterDigit%'"
  recSet = dataProvider.execute(query)    
  
  if(recSet.EOF){
    Log.Warning("Result of the query is empty.", query);
    return false
  }
    
  recSet.MoveFirst()  
  while (!recSet.EOF) {
    InputText(recSet.Fields.Item("Param1").Value)    
    recSet.MoveNext();
  }
  
  dataProvider.closeConnection()
}


  