using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiffValuesInArray
{
    class Program
    {
        static void Main()
        {
            object[] array = new object[3]; 
            array[0] = 1; // Integer
            array[1] = "string"; // string

            Customer c = new Customer();
            c.ID = 99;
            c.Name = "Craig";
            array[2] = c;   // Customer - Complex type

            foreach(object obj in array)
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
