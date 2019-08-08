using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeSpokedBikes.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeSpokedBikes.Controllers
{
    public class SaleController : Controller
    {
        SaleDataAccessLayer saleDL = new SaleDataAccessLayer();

        //Controller to show all products
        [HttpGet]
        [Route("api/Sales/Index")]
        public IEnumerable<Sales> Index()
        {
            return saleDL.GetAllSales();
        }

        //Controller to create a new product
        [HttpPost]
        [Route("api/Sales/Create")]
        public int Create([FromBody] Sales sale)
        {
            return saleDL.AddSale(sale);
        }

        [HttpGet]
        [Route("api/Sales/GetProductsList")]
        public IEnumerable<Products> ProductsListDetails()
        {
            return saleDL.GetProducts();
        }

        [HttpGet]
        [Route("api/Sales/GetSalesList")]
        public IEnumerable<SalesPerson> SalesPersonListDetails()
        {
            return saleDL.GetSalesPersons();
        }

        [HttpGet]
        [Route("api/Sales/GetCustomerList")]
        public IEnumerable<Customer> CustomerListDetails()
        {
            return saleDL.GetCustomers();
        }
    }
}
