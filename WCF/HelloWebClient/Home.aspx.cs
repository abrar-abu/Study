using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HelloWebClient
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            HelloService.HelloServiceClient client = new HelloService.HelloServiceClient("BasicHttpBinding_IHelloService");
            Label1.Text = client.GetMessage(TextBox1.Text);

        }
    }
}