using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeSpokedBikes.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeSpokedBikes.Controllers
{
    public class SalesPersonController : Controller
    {
        SalesPersonDataAccessLayer salespersonDL = new SalesPersonDataAccessLayer();

        //Controller to show all products
        [HttpGet]
        [Route("api/SalesPerson/Index")]
        public IEnumerable<SalesPerson> Index()
        {
            return salespersonDL.GetAllSalesPersons();
        }


        //Controller to get a salesperson by ID
        [HttpGet]
        [Route("api/SalesPerson/Details/{id}")]
        public SalesPerson Details(int id)
        {
            return salespersonDL.GetSalesPersonData(id);
        }

        //Controller to edit a salesperson
        [HttpPut]
        [Route("api/SalesPerson/Edit")]
        public int Edit([FromBody] SalesPerson salesperson)
        {
            return salespersonDL.UpdateSalesPerson(salesperson);
        }
    }
}
