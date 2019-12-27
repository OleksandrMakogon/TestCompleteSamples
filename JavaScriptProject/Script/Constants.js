class NotepadConstants{}
NotepadConstants.NotepadText = 'notepad';

//use in DBConnections.CurrentConnection connection you want
class DBConnections{}
DBConnections.MSAccess = 'Driver=Microsoft Access Driver (*.mdb, *.accdb);Dbq=' + Files.FileNameByName('Database1_accdb');
DBConnections.Excel = 'Driver=Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb);Dbq=' + Files.FileNameByName('Database1_xlsx');
DBConnections.CSV = "Driver=Microsoft Access Text Driver (*.txt, *.csv);Initial Catalog='"+ aqFileSystem.GetFileFolder(Files.FileNameByName('Book1_csv')) + "';HDR=Yes;Include Files=CSV";
DBConnections.CurrentConnection = DBConnections.CSV

module.exports.NotepadConstants = NotepadConstants
module.exports.DBConnections = DBConnections 
