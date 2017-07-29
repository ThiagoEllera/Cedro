using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cedro.DTO
{
    public class PratoDTO
    {
        public int Id_Prato { get; set; }
        public string Nome_Prato { get; set; }
        public decimal Preco_Prato { get; set; }
        public int Id_Restaurante { get; set; }
        public string Nome_Restaurante { get; set; }
    }
}