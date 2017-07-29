using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Cedro.Models
{
    public class Restaurante
    {
        [Key]
        public int Id_Restaurante { get; set; }
        public string Nome_Restaurante { get; set; }

        public virtual ICollection<Restaurante> ListaRestaurante { get; set; }
    }
}