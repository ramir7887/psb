using EZService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using static EZService.DapperDbConnection;

namespace EZService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IDbRepository repo;
        public AuthController(ILogger<AuthController> logger, IDbRepository r)
        {
            _logger = logger;
            repo = r;
        }

        [HttpPost]
        public dynamic Post(CredentialsInfo credentials)
        {
            AuthData res = repo.AuthUser(credentials);

            if(res == null)
            {
                return Unauthorized(new ErrorData { Message = "Введен неверный логин или пароль!" });
            }

            Random rnd = new Random();
            string token = GenerateToken(Convert.ToString(rnd.Next(10000, 99999)));
            res.token = token;
            repo.SetUserToken(credentials, res);

            return res;
        }

		public static string GenerateToken(string strEngId)
		{
			var encoding = new UTF8Encoding();
			var arrBytes = encoding.GetBytes(string.Format("{0};{1};{2}", strEngId, DateTime.Now.ToFileTimeUtc(), (new Guid()).ToString()));
			var algorithm = new HMACSHA1();
			return Convert.ToBase64String(algorithm.ComputeHash(algorithm.ComputeHash(arrBytes))).Replace("+", "-").Replace("/", "_");
		}
	}

}
