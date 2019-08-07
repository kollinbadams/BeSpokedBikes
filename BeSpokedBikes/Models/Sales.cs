using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Models
{
    public partial class Sales
    {
        public Guid SalesId { get; set; }
        public Guid Product { get; set; }
        public Guid SalesPerson { get; set; }
        public Guid Customer { get; set; }
        public DateTime SalesDate { get; set; }

        public virtual Customer CustomerNavigation { get; set; }
        public virtual Products ProductNavigation { get; set; }
        public virtual SalesPerson SalesPersonNavigation { get; set; }
    }
}
