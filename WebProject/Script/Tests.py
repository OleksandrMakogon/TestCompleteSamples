
def main():
  Log.Message("Found {0} browsers.".format(Browsers.Count)) 
  for i in range(Browsers.Count):
    Log.AppendFolder(Browsers.Item[i].Description)
    Browsers.Item[i].Run("http://support.smartbear.com/samples/testcomplete12/WebOrders/")
    Log.PopLogFolder()
    return True