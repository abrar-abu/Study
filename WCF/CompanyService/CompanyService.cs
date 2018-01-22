using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace CompanyService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "CompanyService" in both code and config file together.
    public class CompanyService : ICompanyPublicService,ICompanyConfidentialService
    {
        public string GetPublicInformation()
        {
            return "This is public information and available over HTTP to all general public outside the FireWall";
        }

        public string GetConfidentialInformation()
        {
            return "This is confidential information and only available over TCP behind the company FireWall";
        }

    }
}
