namespace Cedro.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Inicial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Prato",
                c => new
                    {
                        Id_Prato = c.Int(nullable: false, identity: true),
                        Nome_Prato = c.String(),
                        Preco_Prato = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Id_Restaurante = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id_Prato)
                .ForeignKey("dbo.Restaurante", t => t.Id_Restaurante, cascadeDelete: true)
                .Index(t => t.Id_Restaurante);
            
            CreateTable(
                "dbo.Restaurante",
                c => new
                    {
                        Id_Restaurante = c.Int(nullable: false, identity: true),
                        Nome_Restaurante = c.String(),
                        Restaurante_Id_Restaurante = c.Int(),
                    })
                .PrimaryKey(t => t.Id_Restaurante)
                .ForeignKey("dbo.Restaurante", t => t.Restaurante_Id_Restaurante)
                .Index(t => t.Restaurante_Id_Restaurante);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Prato", "Id_Restaurante", "dbo.Restaurante");
            DropForeignKey("dbo.Restaurante", "Restaurante_Id_Restaurante", "dbo.Restaurante");
            DropIndex("dbo.Restaurante", new[] { "Restaurante_Id_Restaurante" });
            DropIndex("dbo.Prato", new[] { "Id_Restaurante" });
            DropTable("dbo.Restaurante");
            DropTable("dbo.Prato");
        }
    }
}
