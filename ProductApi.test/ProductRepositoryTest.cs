using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductApi.infrastructure;

namespace ProductApi.test
{
    [TestClass]
    public class ProductRepositoryTest
    {
        ProductRepository repo;
        [TestInitialize]
        public void TestSetUp()
        {

            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }
        [TestMethod]
        public void ShouldDataBaseGetCreatedWithTwoRecordsInIt()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var numberOfRecords = result.ToList().Count;
            Assert.AreEqual(2, numberOfRecords);
        }

    }
}
