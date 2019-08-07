using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Models
{
    public partial class Sales
    {
        public int SalesId { get; set; }
        public int Product { get; set; }
        public int SalesPerson { get; set; }
        public int Customer { get; set; }
        public DateTime SalesDate { get; set; }

        public virtual Customer CustomerNavigation { get; set; }
        public virtual Products ProductNavigation { get; set; }
        public virtual SalesPerson SalesPersonNavigation { get; set; }
    }
}
