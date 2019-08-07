using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeSpokedBikes.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeSpokedBikes.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {

        ProductsDataAccessLayer productsDL = new ProductsDataAccessLayer();

        //Controller to show all products
        [HttpGet]
        //TODO Add [Route] Attribute
        public IEnumerable<Products> Index()
        {
            return productsDL.GetAllProducts();
        }

        //TODO Add controller to edit a product
    }
}
