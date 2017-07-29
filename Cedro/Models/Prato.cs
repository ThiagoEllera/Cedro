using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Cedro.Models
{
    public class Prato
    {
        [Key]
        public int Id_Prato { get; set; }
        public string Nome_Prato { get; set; }

        public decimal Preco_Prato { get; set; }

        public int Id_Restaurante { get; set; }

        [ForeignKey("Id_Restaurante")]
        public Restaurante Restaurante { get; set; }
    }
}