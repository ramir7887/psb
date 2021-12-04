using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZService.Models
{
    public class CheckTokenData
    {
        public string login { get; set; }
        public int employee_id { get; set; }
        public string token { get; set; }
        public DateTime create_date { get; set; }
        public DateTime end_date { get; set; }
        public string result { get; set; }

    }
}
