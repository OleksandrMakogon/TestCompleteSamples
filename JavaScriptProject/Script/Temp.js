function test1(){
  var sentence = 'The quick brown fox jumps over the lazy dog.';
  var word = 'fox';
  Log.Message(`The word "${word}" ${sentence.includes(word)? "is" : "is not"} in the sentence.`, sentence);
}

function testProvider(){
  prov = new CsvDataProvider(Constants.DBConnections.CSV)
  //prov = new CsvDataProvider(Constants.DBConnections.MSAccess)
  RecSet = prov.execute("select * from Book1 where CaseName like 'EnterText%'")    
  
  if(RecSet != null && !RecSet.EOF){
    RecSet.MoveFirst();
  } else {
    Log.Message("Result of the query is empty recordset: ");
  }
  
  while (! RecSet.EOF ) {
    var StepVal = RecSet.Fields.Item("CaseName").Value;
    var vpVal = RecSet.Fields.Item("Param1").Value;
    Log.Message(StepVal + " - " + vpVal);
    RecSet.MoveNext();
  }
 
  
}