from Constants import *

class Notepad():

  def __init__(this):
    this.getProcess()
    this.getMainWindow()
    this.getEdit()
    
  def getProcess(this):
    this.process = Sys.FindChild(['ProcessName', 'Index'], ['*notepad*', 1])
  
  def getMainWindow(this):
    this.mainWindow = this.process.FindChild('WndClass', NOTEPAD)
    
  def getEdit(this):
    this.edit = this.mainWindow.FindChild('WndClass', 'Edit')
  
  def getText(this):
    return this.edit.wText
    
  def enterText(this, text):
   this.edit.Keys(text)
   if this.getText() == text:
    Log.Message('Text is entered.', text)
   else:
    Log.Warning('Text is not entered', 'Expected: {}; Actual: {}.'.format(text, this.getText()))     
  
  def clearContent(this):
    this.edit.SetText('')
    if this.getText() == '':
      Log.Message('Content is empty.')
    else:
      Log.Warning('Content is not empty.', 'Content: ' + this.getText())
    

   
    