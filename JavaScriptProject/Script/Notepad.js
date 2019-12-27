var Constants = require("Constants");

class Notepad {
  
  constructor() {
    if (!this.getProcess()) return false
    this.getMainWindow()
    this.getEdit()
  }
    
  getProcess(){
    this.process = Sys.FindChild(new Array('ProcessName', 'Index'), 
                                  new Array('*notepad*', 1)) 
    if (!this.process.Exists){
      Log.Message('Notepad Process not found.')
      return false
    }
    return true
  }
  
  getMainWindow(){
    this.mainWindow = this.process.FindChild('WndClass', Constants.NotepadConstants.NotepadText)
    if (!this.mainWindow.Exists){
      Log.Message('Notepad mainWindow not found.')
      return false
    }
  }
    
  getEdit(){
    this.edit = this.mainWindow.FindChild('WndClass', 'Edit')
    if (!this.edit.Exists){
      Log.Message('Notepad edit not found.')
      return false
    }
    return true
  }
  
  getText(){
    return this.edit.wText
  }
    
  enterText(text){
   this.edit.Keys(text)
   if (this.getText() == text){
    Log.Message('Text is entered.', text)
   }
   else{
    Log.Warning('Text is not entered', 'Expected: {}; Actual: {}.'.format(text, this.getText()))
   }
  }     
  
  clearContent(){
    this.edit.SetText('')
    if (this.getText() == '') {
      Log.Message('Content is empty.')
    }
    else {
      Log.Warning('Content is not empty.', 'Content: ' + this.getText())
    }
  }
}

module.exports.Notepad = Notepad;

