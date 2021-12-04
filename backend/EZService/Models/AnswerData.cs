using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZService.Models
{
    public class AnswerData
    {
        public int answer_id { get; set; }
        public int question_id { get; set; }
        public string name { get; set; }
        public bool right { get; set; }
    }
}
