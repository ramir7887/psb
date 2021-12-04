using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZService.Models
{
    public class CourcesStageData
    {
        public string employee_id { get; set; }
        public string stage_id { get; set; }
        public string stage_name { get; set; }
        public string stage_descrption { get; set; }
        public string time_to_pass { get; set; }
        public string content { get; set; }
        public string create_date { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
    }
}
