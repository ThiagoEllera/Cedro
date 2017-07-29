using Cedro.DTO;
using Cedro.Models;
using Cedro.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Cedro.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PratoController : ApiController
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

        public IQueryable<PratoDTO> Get()
        {
            IQueryable<PratoDTO> lista = PratoRepository.Get();
            return lista;
        }

        // GET api/<controller>/5
        public PratoDTO Get(int id, Prato entity)
        {
            return PratoRepository.GetOne(id);
        }


        //POST api/<controller>
        public void Post([FromBody] Prato entity)
        {
            if (!string.IsNullOrEmpty(entity.Nome_Prato))
            {
                PratoRepository.Save(entity);
            }
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Prato entity)
        {
            if (entity.Id_Prato > 0)
            {
                PratoRepository.Save(entity);
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id, Prato entity)
        {
            if (id > 0)
            {
                entity = PratoRepository.GetOneByID(id);
                PratoRepository.Delete(entity);
            }
        }
    }
}