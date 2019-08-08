using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeSpokedBikes.Models
{
    public partial class Products
    {
        public Products()
        {
            Discount = new HashSet<Discount>();
            Sales = new HashSet<Sales>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public string Style { get; set; }
        public int QtyOnHand { get; set; }
        public decimal CommissionPercentage { get; set; }
        public decimal PurchasePrice { get; set; }
        public decimal? SalePrice { get; set; }

        public virtual ICollection<Discount> Discount { get; set; }
        public virtual ICollection<Sales> Sales { get; set; }
    }
}
