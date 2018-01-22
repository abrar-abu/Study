<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="CompanyClient.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
       <div style="font-family:Arial">
    <table style="border:1px solid black">
        <tr>
            <td>
                <asp:Button ID="Button1" runat="server" Text="Get Public Information" 
                    onclick="Button1_Click" Width="300px" />
            </td>
            <td>
                <asp:Label ID="Label1" runat="server" Font-Bold="true"></asp:Label>            
            </td>
        </tr>
        <tr>
            <td>
                <asp:Button ID="Button2" runat="server" Text="Get Confidential Information" 
                    onclick="Button2_Click" Width="300px" />
            </td>
            <td>
                <asp:Label ID="Label2" runat="server" Font-Bold="true"></asp:Label>            
            </td>
        </tr>
    </table>
</div>
    </form>
</body>
</html>
