using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;  // using the ArrayList in the system collections namespace

namespace DiffValuesInArray2
{
    class Program
    {
        static void Main()
        {
            ArrayList array = new ArrayList  // you can use this class as well to store different types.
            {
                1,
                "string"
            };


            Customer c = new Customer();
            c.ID = 99;
            c.Name = "Craig";
            array.Add(c);

            foreach (object obj in array)
            {
                Console.WriteLine(obj);
            }
        }
    }

    class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public override string ToString()
        {
            return this.Name;
        }
    }
}
