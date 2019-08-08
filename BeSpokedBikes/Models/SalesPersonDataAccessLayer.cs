using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BeSpokedBikes.Models
{
    public class SalesPersonDataAccessLayer
    {
        BeSpokedBikesContext db = new BeSpokedBikesContext();

        //To Fetch all salesperson records
        public IEnumerable<SalesPerson> GetAllSalesPersons()
        {
            try
            {
                return db.SalesPerson.ToList();
            }
            catch
            {
                throw;
            }
        }


        //To Update a salesperson entry
        public int UpdateSalesPerson(SalesPerson salesperson)
        {
            try
            {
                db.Entry(salesperson).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }

        }

        //Get the details of a particular salesperson  
        public SalesPerson GetSalesPersonData(int id)
        {
            try
            {
                SalesPerson salesperson = db.SalesPerson.Find(id);
                return salesperson;
            }
            catch
            {
                throw;
            }
        }

        

    }
}
