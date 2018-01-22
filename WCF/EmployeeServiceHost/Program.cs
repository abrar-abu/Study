using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace EmployeeServiceHost
{
    class Program
    {
        static void Main(string[] args)
        {
            using (ServiceHost host = new ServiceHost(typeof(EmployeeService.EmployeeService)))
            {
                host.Open();
                Console.WriteLine("Host has started @" + DateTime.Now.ToString());
                Console.ReadKey();
            }
        }
    }
}
