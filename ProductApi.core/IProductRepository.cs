using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.core
{
    public interface IProductRepository
    {
        void Add(Product p);
        void Edit(Product p);
        Product GetById(string ProductID);
        void Remove(string ProductID);
        IEnumerable<Product> GetProducts();
    }
}
