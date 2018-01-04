using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JagArray
{
    class Program
    {
        static void Main()
        {

            string[] employeeNames = new string[3];
            employeeNames[0] = "Mark";
            employeeNames[1] = "Matt";
            employeeNames[2] = "John";


            string[][] jaggedArray = new string[3][];

            jaggedArray[0] = new string[3];
            jaggedArray[1] = new string[1];
            jaggedArray[2] = new string[2];

            // Mark's qualifications
            jaggedArray[0][0] = "Bachelors";
            jaggedArray[0][1] = "Master";
            jaggedArray[0][2] = "Doctorate";
            
            // Matt's qualifications
            jaggedArray[1][0] = "Bachelors";

            // John's qualifications
            jaggedArray[2][0] = "Bachelors";
            jaggedArray[2][1] = "Master";

            for(int i = 0; i < jaggedArray.Length; i++)
            {
                Console.WriteLine(employeeNames[i]);
                Console.WriteLine("------");
                string[] innerArray = jaggedArray[i];
                for(int j = 0; j < innerArray.Length; j++)
                {
                    Console.WriteLine(innerArray[j]);
                }
                Console.WriteLine();
            }

        }
    }
}
