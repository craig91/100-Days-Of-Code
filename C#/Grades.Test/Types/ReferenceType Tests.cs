using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades.Test.Types
{
    [TestClass]
    public class TypeTests
    {

        [TestMethod]
        public void UsingArrays()
        {
            float[] grades;
            grades = new float[3];

            AddGrades(grades);

            Assert.AreEqual(89.1f, grades[1]);
        }

        private void AddGrades(float[] grades)
        {
            grades[1] = 89.1f;
        }

        [TestMethod]
        public void UpperCaseAString()
        {
            string name = "craig";
            name = name.ToUpper();

            Assert.AreEqual("CRAIG", name);
        }

        [TestMethod]
        public void AddDaysToDateTime()
        {
            DateTime date = new DateTime(2018, 1, 1);
            date = date.AddDays(1);

            Assert.AreEqual(2, date.Day);
        }


        [TestMethod]
        public void ValueTypesPassedByValue()
        {
            int x = 46;
            IncrementANumber(x);

            Assert.AreEqual(46, x);
        }

        private void IncrementANumber(int number)
        {
            number += 1;
            number = 0;
        }



/// /////////////////////////////////////////////////////////////

        [TestMethod]
        public void ReferenceTypesPassedByValue()
        {
            GradeBook book1 = new GradeBook();
            GradeBook book2 = book1;

            GiveBookAName(book2);
            Assert.AreEqual("A GradeBook", book1.Name);
        }

        private void GiveBookAName(GradeBook book)
        {
            book.Name = "A GradeBook";
        }
/// ////////////////////////////////////////////////////////////


        [TestMethod]
        public void StringComparisons()
        {
            string name1 = "craig";
            string name2 = "Craig";

            bool result = string.Equals(name1, name2, StringComparison.InvariantCultureIgnoreCase);
            Assert.IsTrue(result);
        }


        [TestMethod]
        public void IntVariablesHoldAValue()
        {
            int x1 = 100;
            int x2 = x1;

            x1 = 4;
            Assert.AreNotEqual(x1, x2);
        }
        [TestMethod]
        public void GradeBookVariablesHoldAReference()
        {
            GradeBook g1 = new GradeBook();
            GradeBook g2 = g1;

            g1 = new GradeBook();
            g1.Name = "Craig's grade book";
            Assert.AreNotEqual(g1.Name, g2.Name); 
        }
    }
}
