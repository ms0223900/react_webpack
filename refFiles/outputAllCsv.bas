Attribute VB_Name = "Module1"
Public Sub SaveWorksheetsAsCsv()
Dim xWs As Worksheet
Dim xDir As String
Dim folder As FileDialog
Set folder = Application.FileDialog(msoFileDialogFolderPicker)
If folder.Show <> -1 Then Exit Sub
xDir = folder.SelectedItems(1)
For Each xWs In Application.ActiveWorkbook.Worksheets
xWs.SaveAs xDir & "\" & xWs.Name, xlCSV
Next
End Sub
