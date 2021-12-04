using EZService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static EZService.DapperDbConnection;

namespace EZService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IDbRepository repo;
        private StringValues token;
        public UserController(ILogger<UserController> logger, IDbRepository r)
        {
            _logger = logger;
            repo = r;
        }

        [HttpGet]
        public dynamic Get(int employee_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }


            EmployeeData res = repo.GetUserInfo(employee_id);

            return res;
        }

        [HttpGet("cources")]
        public dynamic GetCources()
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }


            List<CourcesData> res = repo.GetUserCources(authRes.employee_id);

            return res;
        }

        [HttpGet("cource/stage")]
        public dynamic GetCourceStage(int course_id, int stage_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }


            CourcesStageData res = repo.GetCourcesStage(course_id, stage_id, authRes.employee_id);

            return res;
        }

        [HttpGet("teststate")]
        public dynamic TestState(int test_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            TestStateData tsd = repo.TestState(test_id, authRes.employee_id);

            return tsd;
        }

        [HttpGet("stagestate")]
        public dynamic StageState(int stage_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            StageStateData ssd = repo.StageState(stage_id, authRes.employee_id);

            return ssd;
        }

        [HttpPut("closetest")]
        public dynamic CloseTest(int test_id, int stage_id, int course_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            repo.CloseTest(authRes.employee_id, stage_id, test_id, course_id);

            return new { Status = "Success" };
        }

        [HttpPut("starttest")]
        public dynamic StartTest(int test_id, int stage_id, int course_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            repo.StartTest(authRes.employee_id, stage_id, test_id, course_id);

            return new { Status = "Success" };
        }

        [HttpPut("closestage")]
        public dynamic CloseStage(int course_id, int stage_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            AchievementData ad = repo.CloseStage(authRes.employee_id, stage_id, course_id);

            if (ad != null)
            {
                return new { Status = "Success", ad };
            }

            return new { Status = "Success" };
        }

        [HttpPut("startstage")]
        public dynamic StartStage(int course_id, int stage_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }

            repo.StartStage(authRes.employee_id, stage_id, course_id);

            return new { Status = "Success" };
        }

        [HttpGet("test")]
        public dynamic GetTest(int course_id, int stage_id)
        {
            Request.Headers.TryGetValue("Token", out token);
            dynamic authRes = Authorize(Convert.ToString(token));

            if (Convert.ToString(authRes) == "Ошибка авторизации" || Convert.ToString(authRes) == "Токен просрочен")
            {
                return Unauthorized(new ErrorData { Message = "Ошибка авторизации" });
            }


            TestData test = repo.GetTestData(course_id, stage_id, authRes.employee_id);
            List<QuestionData> questions = repo.GetQuestionData(test.test_id);
            var question_ids = questions.Select(r => r.question_id).ToArray();
            List<AnswerData> answers = repo.GetAnswerData(question_ids);
            dynamic res = new
            {
                test.test_id,
                test.test_name,
                test.description,
                test.create_date,
                questions = questions.Select(q => new
                {
                    q.question_id,
                    q.name,
                    q.test_id,
                    answers = answers.Where(a=>a.question_id == q.question_id).Select(aa => new 
                    { 
                        aa.answer_id,
                        aa.question_id,
                        aa.name,
                        aa.right
                    })
                })
            };

            return res;
        }

        private dynamic Authorize(string token)
        {
            CheckTokenData res = repo.CheckToken(token);
            if(res == null)
            {
                return "Ошибка авторизации";
            }
            else if(res.result == "expired")
            {
                return "Токен просрочен";
            }
            return res;
        }
    }
}
