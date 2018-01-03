using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NodeChains
{
    public class Node
    {   // Node class contains 2 properties
        public int Value { get; set; }   // <-- Curent node value
        public Node Next { get; set; }   // <-- Next pointer
    }

    class Program
    {
        static void Main(string[] args)
        {
            Node first = new Node { Value = 3 };

            Node middle = new Node { Value = 5 };

            first.Next = middle;

            Node last = new Node { Value = 7 };

            middle.Next = last;

            PrintList(first);
        }

        private static void PrintList(Node node)
        {
            while (node != null)
            {
                Console.WriteLine(node.Value);
                node = node.Next;
            }
        }
    }
}
