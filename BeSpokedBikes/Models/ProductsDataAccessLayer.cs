using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BeSpokedBikes.Models
{
    public class ProductsDataAccessLayer
    {
        BeSpokedBikesContext db = new BeSpokedBikesContext();

        //To Fetch all product records
        public IEnumerable<Products> GetAllProducts()
        {
            try
            {
                return db.Products.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new product record   
        public int AddProduct(Products product)
        {
            try
            {
                db.Products.Add(product);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update a product entry
        public int UpdateProduct(Products product)
        {
            try
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
            
        }
    }
}
