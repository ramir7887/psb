using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZService.Models
{
    public class EmployeeData
    {
        public string personnel_number { get; set; }
        public string full_name { get; set; }
        public int position_id { get; set; }
        public int boss_id { get; set; }
        public DateTime birth_date { get; set; }
        public string email { get; set; }
        public string mobile_phone { get; set; }
        public string work_phone { get; set; }
        public string work_place { get; set; }
        public string image { get; set; }
        public string position { get; set; }
        public string departament { get; set; }
    }
}
