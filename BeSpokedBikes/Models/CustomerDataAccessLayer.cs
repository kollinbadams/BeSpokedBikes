using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeSpokedBikes.Models
{
    public class CustomerDataAccessLayer
    {
        BeSpokedBikesContext db = new BeSpokedBikesContext();

        //To Fetch all customer records
        public IEnumerable<Customer> GetAllCustomers()
        {
            try
            {
                return db.Customer.ToList();
            }
            catch
            {
                throw;
            }
        }
    }
}
