﻿using BlogCore.AccesoDatos.Data.Repository;
using System;


namespace BlogCore.AccesoDatos.Data
{
    public class ContenedorTrabajo : IContenedorTrabajo
    {


        private readonly ApplicationDbContext _db;
        

       public ContenedorTrabajo(ApplicationDbContext db)
        {
           _db = db;
            Categoria = new CategoriaRepository(_db);

        }
  
     
        public ICategoriaRepository Categoria { get; private set; }

        public void Dispose()
        {
            _db.Dispose();
        }

        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
