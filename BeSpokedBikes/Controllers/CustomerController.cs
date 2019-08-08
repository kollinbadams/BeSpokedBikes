using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeSpokedBikes.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeSpokedBikes.Controllers
{
    public class CustomerController : Controller
    {
        CustomerDataAccessLayer customerDL = new CustomerDataAccessLayer();

        //Controller to show all products
        [HttpGet]
        [Route("api/Customer/Index")]
        public IEnumerable<Customer> Index()
        {
            return customerDL.GetAllCustomers();
        }
    }
}
