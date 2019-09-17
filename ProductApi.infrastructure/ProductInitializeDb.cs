using ProductApi.core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.infrastructure
{
    public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(
            new Product
            {
                ProductID="1",
                Title="Hammer",
                Quantity=15,
                Color="Red",
                Price=300,
                inStock=true,
                Rating=5,
                ExpiryDate=DateTime.Now,
                ImageUrl="abc.jpg",
                Details="This is an awesome product"

            }
            );
            context.Products.Add(
            new Product
            {
                ProductID = "2",
                Title = "Saw",
                Quantity = 25,
                Color = "Black",
                Price = 400,
                inStock = false,
                Rating = 5,
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                Details = "This is a very awesome product"

            }
            );
            base.Seed(context);
        }
    }
}
