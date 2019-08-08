using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeSpokedBikes.Models
{
    public class SaleDataAccessLayer
    {
        BeSpokedBikesContext db = new BeSpokedBikesContext();

        //To get all the sale records
        public IEnumerable<Sales> GetAllSales()
        {
            try
            {
                return db.Sales.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new sale record   
        public int AddSale(Sales sale)
        {
            try
            {
                db.Sales.Add(sale);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get list of products
        public List<Products> GetProducts()
        {
            List<Products> productList = new List<Products>();
            productList = (from PRODUCTLIST in db.Products select PRODUCTLIST).ToList();

            return productList;
        }

        //To Get list of salespersons
        public List<SalesPerson> GetSalesPersons()
        {
            List<SalesPerson> salespersonList = new List<SalesPerson>();
            salespersonList = (from SALESPERSONLIST in db.SalesPerson select SALESPERSONLIST).ToList();

            return salespersonList;
        }

        //To Get list of salespersons
        public List<Customer> GetCustomers()
        {
            List<Customer> customerList = new List<Customer>();
            customerList = (from CUSTOMERLIST in db.Customer select CUSTOMERLIST).ToList();

            return customerList;
        }
    }
}
