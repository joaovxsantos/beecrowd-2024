const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input;

//Separando quando tiver ponto '.' ou traço '-'
lines.split(/[.-]/g).forEach(num => console.log(num));


// Tive que enviar em C# pq em JS ta bugado, dando PRESETATION ERROR, sendo q ta td certo


// using System;


// namespace _2763___Entrada_e_Saída_CPF
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             string cpf = Console.ReadLine().Replace(".", "").Replace("-", "");  

//             string[] cpf_completo = new string[4];

//             cpf_completo[0]=cpf.Substring(0,3); 
//             cpf_completo[1]=cpf.Substring(3,3); 
//             cpf_completo[2]=cpf.Substring(6,3); 
//             cpf_completo[3]=cpf.Substring(9,2); 

//             foreach (string i in cpf_completo)
//             {
//                 Console.Write("{0}\n", i);
//             }       
//         }
//     }
// }