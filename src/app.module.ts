import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProdutoModule } from './produtos/produto.module';
import { AppService } from './app.service';
import { Produto } from './produtos/entities/produto.entity';
//import { UsuarioModule } from './usuario/usuario.module';
//import { AuthModule } from './auth/auth.module';
//import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_crm',
        entities: [Produto],
        synchronize: true,
}),
  // ProdutoModule, //
],
  controllers: [AppController],
  providers: [AppService],
    //AuthModule,
    //UsuarioModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
