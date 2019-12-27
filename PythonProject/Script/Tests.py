from Notepad import *

def InputText(text):
  Log.AppendFolder('Test: InputText: ' + str(text))
  notepad = Notepad()
  notepad.clearContent()
  notepad.enterText(text)  
  Log.PopLogFolder()
  
#Test1: Input Text 'Hello World'
#@EnterText
def EnterText1():
  DDT.CSVDriver(Files.FileNameByName('Book1_csv'))
  
  # Iterates through records
  while not DDT.CurrentDriver.EOF():
    if 'EnterText' in DDT.CurrentDriver.Value[0]:
      InputText(DDT.CurrentDriver.Value[1])
    DDT.CurrentDriver.Next()
  # Closes the driver 
  DDT.CloseDriver(DDT.CurrentDriver.Name)
  
  
#Test2: Input Text '12113123'
#@EnterText
def EnterText2():
  InputText('12113123')