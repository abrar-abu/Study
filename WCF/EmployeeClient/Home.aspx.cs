using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EmployeeClient
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnGetEmployee_Click(object sender, EventArgs e)
        {
            EmployeeService.EmployeeServiceClient client = new EmployeeService.EmployeeServiceClient();
            EmployeeService.Employee emp = client.GetEmployee(Convert.ToInt32( txtID.Text));

            txtName.Text = emp.Name;
            txtGender.Text = emp.Gender;
            txtDateOfBirth.Text = emp.DateOfBirth.ToShortDateString();

            lblMessage.Text = "Employee retrieved";
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            EmployeeService.Employee employee = new EmployeeService.Employee();
            employee.Id = Convert.ToInt32(txtID.Text);
            employee.Name = txtName.Text;
            employee.Gender = txtGender.Text;
            employee.DateOfBirth = Convert.ToDateTime(txtDateOfBirth.Text);

            EmployeeService.EmployeeServiceClient client = new EmployeeService.EmployeeServiceClient();
            client.SaveEmployee(employee);

            lblMessage.Text = "Employee saved";
        }
    }
}