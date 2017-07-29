using Cedro.DAL;
using Cedro.DTO;
using Cedro.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Cedro.Repository
{
    public class PratoRepository
    {
        private CedroContext db = new CedroContext();

        private static readonly Expression<Func<Prato, PratoDTO>> AsPratoDTO =
            x => new PratoDTO
            {
                Id_Prato = x.Id_Prato,
                Nome_Prato = x.Nome_Prato,
                Preco_Prato = x.Preco_Prato,
                Id_Restaurante = x.Id_Restaurante,
                Nome_Restaurante = x.Restaurante.Nome_Restaurante
            };

        public PratoDTO GetOne(int id)
        {
            PratoDTO prato = db.Pratos.Include(p => p.Restaurante)
                    .Where(p => p.Id_Prato == id)
                    .Select(AsPratoDTO)
                    .FirstOrDefault();
            return prato;
        }

        public Prato GetOneByID(int id)
        {
            return db.Pratos.FirstOrDefault(p => p.Id_Prato == id);
        }

        public IQueryable<PratoDTO> Get()
        {
            return db.Pratos.Include(r => r.Restaurante).Select(AsPratoDTO);
        }

        public List<Prato> GetAll()
        {
            return db.Pratos.ToList();
        }

        public void Delete(Prato entity)
        {
            db.Pratos.Remove(entity);
            db.SaveChanges();
        }

        public void Save(Prato entity)
        {
            db.Entry(entity).State = entity.Id_Prato == 0 ?
            EntityState.Added : EntityState.Modified;
            db.SaveChanges();
        }

        public List<Prato> GetByName(string nome)
        {
            return db.Pratos.Where(x => x.Nome_Prato.Contains(nome)).OrderBy(x => x.Nome_Prato).ToList();
        }
        public List<Prato> GetByIdRestaurante(int id)
        {
            return db.Pratos.Where(x => x.Id_Restaurante == id).ToList();
        }
    }
}