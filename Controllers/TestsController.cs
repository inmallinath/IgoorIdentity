using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace IgoorIdentity.Controllers
{
    [Route("api/Tests")]
    public class TestsController : Controller
    {
        [HttpGet("")]
        public IEnumerable<string> Get()
        {
            return new string[] {"Welcome to Igoor Identity Server"};
        }
    }
}