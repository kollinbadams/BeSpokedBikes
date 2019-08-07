using System;
using System.Collections.Generic;

namespace BeSpokedBikes.Models
{
    public partial class Discount
    {
        public int DiscountId { get; set; }
        public int Product { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal DiscountPercentage { get; set; }

        public virtual Products ProductNavigation { get; set; }
    }
}
