using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace API.Data
{
    public class DataContext : DbContext
    {
       
        public DataContext(DbContextOptions options) : base(options)
        {
             
        }
        public DbSet<AppUser> Users { get; set; }

         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer("Data Source=SANTOLOVIC-LAP;Initial Catalog=DatingApp;Integrated Security=True;");
    }
}