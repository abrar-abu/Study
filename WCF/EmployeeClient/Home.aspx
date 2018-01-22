<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="EmployeeClient.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <table style="font-family:Arial; border:1px solid black;">
            <tr>
                <td>
                    <b>ID</b>
                </td>
                <td>
                    <asp:TextBox ID="txtID" runat="server">
                    </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <b>Name</b>
                </td>
                <td>
                    <asp:TextBox ID="txtName" runat="server">
                    </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <b>Gender</b>
                </td>
                <td>
                    <asp:TextBox ID="txtGender" runat="server">
                    </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <b>Date Of Birth</b>
                </td>
                <td>
                    <asp:TextBox ID="txtDateOfBirth" runat="server">
                    </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="btnGetEmployee" runat="server" 
                                         Text="Get Employee" 
                                         onclick="btnGetEmployee_Click" />                                    
                </td>
                <td>
                    <asp:Button ID="btnSave" runat="server" 
                                Text="Save Employee" 
                                onclick="btnSave_Click" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Label ID="lblMessage" runat="server" 
                                ForeColor="Green" Font-Bold="true">
                    </asp:Label>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
