using Dapper;
using System.Collections.Generic;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Linq;
using EZService.Models;
using System;
using Npgsql;

namespace EZService
{
    public class DapperDbConnection
    {
        public interface IDbRepository
        {
            AuthData AuthUser(CredentialsInfo credentials);
            void SetUserToken(CredentialsInfo credentials, AuthData adata);
            CheckTokenData CheckToken(string token);
            EmployeeData GetUserInfo(int employeeId);
            List<CourcesData> GetUserCources(int employeeId);
            CourcesStageData GetCourcesStage(int course_id, int stage_id, int employeeId);
            TestData GetTestData(int course_id, int stage_id, int employeeId);
            List<QuestionData> GetQuestionData(int testId);
            List<AnswerData> GetAnswerData(int[] question_ids);
            void CloseTest(int employeeId, int stage_id, int testId, int course_id);
            void StartTest(int employeeId, int stage_id, int testId, int course_id);
            AchievementData CloseStage(int employeeId, int stage_id, int course_id);
            void StartStage(int employeeId, int stage_id, int course_id);
            StageStateData StageState(int stage_id, int employeeId);
            TestStateData TestState(int testId, int employeeId);
        }
        public class DbRepository : IDbRepository
        {
            string connectionString = null;
            public DbRepository(string conn)
            {
                connectionString = conn;
            }

            public TestStateData TestState(int testId, int employeeId)
            {
                TestStateData ts = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQuery = "select count() from employee_test et where et.end_date is not null and et.test_id = @testId";
                    ts.numberOfEmployees = db.Execute(sqlQuery, new { testId });
                    var sqlQueryS = "select (count()+1 ) as place from employee_test et where end_date is not null and (end_date - start_date) < (select (end_date - start_date) as time from employee_test et2 where et.end_date is not null and et.test_id = @testId and employee_id = @employeeId) and test_id = @testId and employee_id = @employeeId";
                    ts.placeOfCurentEmployee = db.Execute(sqlQueryS, new { testId, employeeId });
                }
                return ts;
            }

            public StageStateData StageState(int stage_id, int employeeId)
            {
                StageStateData ssd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQuery = "select count() from employee_stage es where es.end_date is not null and es.stage_id = @stage_id";
                    ssd.numberOfEmployees = db.Execute(sqlQuery, new { stage_id });
                    var sqlQueryS = "select (count()+1) as place from employee_stage es where end_date is not null and (end_date - start_date) < (select (es2.end_date - es2.start_date) as time from employee_test es2 where es2.end_date is not null and es2.stage_id = @stage_id and es2.employee_id = @employeeId) and stage_id = @stage_id and employee_id = @employeeId";
                    ssd.placeOfCurentEmployee = db.Execute(sqlQueryS, new { stage_id, employeeId });
                }
                return ssd;
            }

            public AchievementData CloseStage(int employeeId, int stage_id, int course_id)
            {
                AchievementData ad = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQuery = "update employee_stage set end_date = now(), complited = true where employee_id = @employeeId and stage_id = @stage_id and course_id = @course_id";
                    db.Execute(sqlQuery, new { employeeId, stage_id, course_id });
                    ad = db.Query<AchievementData>("SELECT a.* FROM public.achievement a, stage_achievement sa where sa.achievement_id = a.achievement_id and sa.stage_id = @stage_id", new { stage_id }).FirstOrDefault();
                    if(ad != null)
                    {
                        var sqlQueryS = "INSERT INTO public.employee_achievement (employee_id, achievement_id, stage_id, create_date) values (@employee_id, @achievement_id, @stage_id, now())";
                        db.Execute(sqlQueryS, new { employeeId, ad.achievement_id, stage_id });
                    }
                }
                return ad;
            }

            public void StartStage(int employeeId, int stage_id, int course_id)
            {
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQueryS = "update employee_stage set start_date = now() where employee_id = @employeeId and stage_id = @stage_id and course_id = @course_id";
                    db.Execute(sqlQueryS, new { employeeId, stage_id, course_id });
                }
            }

            public void StartTest(int employeeId, int stage_id, int testId, int course_id)
            {
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQueryS = "update employee_test set start_date = now() where employee_id = @employeeId and test_id = @testId and stage_id = @stage_id and exists(select * from employee_stage es, employee_test et1 where  et1.employee_id = es.employee_id and et1.stage_id = es.stage_id and es.course_id = @course_id andet1.employee_id = @employeeId and et1.test_id = 1 and et1.stage_id = @stage_id)";
                    db.Execute(sqlQueryS, new { employeeId, testId, stage_id, course_id });
                }
            }

            public void CloseTest(int employeeId, int stage_id, int testId, int course_id)
            {
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    var sqlQuery = "update employee_test set end_date = now(), complited = true where employee_id = @employeeId and test_id = @testId and stage_id = @stage_id and exists (select * from employee_stage es, employee_test et1 where  et1.employee_id = es.employee_id and et1.stage_id = es.stage_id and es.course_id = @course_id and et1.employee_id = @employeeId and et1.test_id = @testId and et1.stage_id = @course_id)";
                    db.Execute(sqlQuery, new { employeeId, stage_id, testId, course_id });

                    var sqlQueryS = "update employee_stage set end_date = now(), complited = true where employee_id = @employeeId and stage_id = @stage_id and course_id = @course_id";
                    db.Execute(sqlQueryS, new { employeeId, stage_id, course_id });
                }
            }

            public List<AnswerData> GetAnswerData(int[] question_ids)
            {
                List<AnswerData> qd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    qd = db.Query<AnswerData>("select * from answer a where a.question_id = ANY (@question_ids)", new { question_ids }).ToList();
                }
                return qd;
            }

            public List<QuestionData> GetQuestionData(int testId)
            {
                List<QuestionData> qd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    qd = db.Query<QuestionData>("select * from question q where q.test_id = @testId", new { testId }).ToList();
                }
                return qd;
            }

            public TestData GetTestData(int course_id, int stage_id, int employeeId)
            {
                TestData td = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    td = db.Query<TestData>("select  t.test_id , t.name as test_name, t.description, t.create_date from login l , test t , stage s , employee_test et, employee_stage es where l.employee_id = et.employee_id and s.stage_id = et.stage_id and et.test_id = t.test_id and et.employee_id = es.employee_id and et.stage_id = es.stage_id and es.course_id = @course_id and l.employee_id = @employeeId and s.stage_id = @stage_id", new { course_id, employeeId , stage_id }).FirstOrDefault();
                }
                return td;
            }

            public CourcesStageData GetCourcesStage(int course_id, int stage_id, int employeeId)
            {
                CourcesStageData csd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    csd = db.Query<CourcesStageData>("select l.employee_id , ec.course_id ,s.stage_id , s.name as stage_name, s.description as stage_descrption, s.time_to_pass , s.content, es.create_date , es.start_date , es.end_date  from login l , employee_stage es, stage s, employee_course ec where es.employee_id = l.employee_id and es.stage_id = s.stage_id and ec.course_id = es.course_id and ec.course_id = @course_id and es.stage_id = @stage_id and l.employee_id = @employeeId", new { course_id, stage_id, employeeId }).FirstOrDefault();
                }
                return csd;
            }

            public List<CourcesData> GetUserCources(int employeeId)
            {
                List<CourcesData> cd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    cd = db.Query<CourcesData>("select l.employee_id , c.course_id , c.name as course_name , s.stage_id , s.name as stage_name , s.content, es.complited, es.create_date , es.start_date from login l, course c, stage s, employee_course ec, employee_stage es where  l.employee_id = es.employee_id and l.employee_id = ec.employee_id and es.stage_id = s.stage_id and ec.course_id = c.course_id and l.employee_id = @employeeId", new { employeeId }).ToList();
                }
                return cd;
            }

            public EmployeeData GetUserInfo(int employeeId)
            {
                EmployeeData ed = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    ed = db.Query<EmployeeData>("select e.*, p.\"name\" as position , d.\"name\" as departament from employee e , position p , department d where e.position_id = p.position_id and p.departament_id = d.department_id and employee_id = @employeeId ", new { employeeId }).FirstOrDefault();
                }
                return ed;
            }

            public CheckTokenData CheckToken(string token)
            {
                CheckTokenData ctd = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    ctd = db.Query<CheckTokenData>("SELECT * FROM login WHERE token = @token", new { token }).FirstOrDefault();
                }
                if(ctd == null)
                {
                    return null;
                }
                if(ctd.end_date <= ctd.create_date)
                {
                    ctd.result = "expired";
                }
                return ctd;
            }

            public AuthData AuthUser(CredentialsInfo credentials)
            {
                AuthData ad = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                   ad = db.Query<AuthData>("SELECT * FROM login WHERE login = @login AND password = @password", new { login = credentials.Login, password = credentials.Password }).FirstOrDefault();
                }
                return ad;
            }

            public void SetUserToken(CredentialsInfo credentials, AuthData adata)
            {
                AuthData ad = new();
                using (IDbConnection db = new NpgsqlConnection(connectionString))
                {
                    DateTime create_date = DateTime.Now;
                    DateTime end_date = DateTime.Now.AddDays(30);
                    var sqlQuery = "UPDATE login SET token = @token, create_date = @create_date, end_date = @end_date WHERE login = @Login";
                    db.Execute(sqlQuery, new { adata.token , create_date, end_date, credentials.Login });
                }
            }
        }
    }
}
