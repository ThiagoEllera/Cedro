using Cedro.DAL;
using Cedro.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Cedro.Repository
{
    public class RestauranteRepository
    {
        private PratoRepository _PratoRepository;

        public PratoRepository PratoRepository
        {
            get
            {
                if (_PratoRepository == null)
                    _PratoRepository = new PratoRepository();
                return _PratoRepository;
            }
            set { _PratoRepository = value; }
        }
        private CedroContext db = new CedroContext();

        public Restaurante GetOne(int id)
        {
            return db.Restaurantes.FirstOrDefault(e => e.Id_Restaurante == id);
        }

        public List<Restaurante> GetAll()
        {
            return db.Restaurantes.ToList();
        }

        public void Delete(Restaurante entity)
        {
            List<Prato> pratos = PratoRepository.GetByIdRestaurante(entity.Id_Restaurante);

            foreach (Prato p in pratos)
            {
                PratoRepository.Delete(p);
            }

            db.Restaurantes.Remove(entity);
            db.SaveChanges();
        }

        public void Save(Restaurante entity)
        {
            db.Entry(entity).State = entity.Id_Restaurante == 0 ?
            EntityState.Added : EntityState.Modified;
            db.SaveChanges();
        }

        public List<Restaurante> GetByName(string nome)
        {
            return db.Restaurantes.Where(x => x.Nome_Restaurante.Contains(nome)).OrderBy(x => x.Nome_Restaurante).ToList();
        }
    }
}