using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sales>();
        }

        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime StartDate { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
