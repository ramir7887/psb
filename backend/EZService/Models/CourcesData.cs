using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZService.Models
{
    public class CourcesData
    {
        public string employee_id { get; set; }
        public string course_id { get; set; }
        public string course_name { get; set; }
        public string stage_id { get; set; }
        public string stage_name { get; set; }
        public string content { get; set; }
        public string complited { get; set; }
        public DateTime create_date { get; set; }
        public DateTime start_date { get; set; }
    }
}
