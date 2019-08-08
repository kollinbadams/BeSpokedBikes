using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeSpokedBikes.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeSpokedBikes.Controllers
{
    public class ProductsController : Controller
    {

        ProductsDataAccessLayer productsDL = new ProductsDataAccessLayer();

        //Controller to show all products
        [HttpGet]
        [Route ("api/Products/Index")]
        public IEnumerable<Products> Index()
        {
            return productsDL.GetAllProducts();
        }

        //Controller to create a new product
        [HttpPost]
        [Route("api/Products/Create")]
        public int Create([FromBody] Products product)
        {
            return productsDL.AddProduct(product);
        }

        //Controller to get a product by ID
        [HttpGet]
        [Route("api/Products/Details/{id}")]
        public Products Details(int id)
        {
            return productsDL.GetProductData(id);
        }

        //Controller to edit a product
        [HttpPut]
        [Route ("api/Products/Edit")]
        public int Edit([FromBody] Products product)
        {
            return productsDL.UpdateProduct(product);
        }

    }
}
