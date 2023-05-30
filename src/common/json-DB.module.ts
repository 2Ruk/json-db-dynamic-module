import { DynamicModule, Global, Module } from '@nestjs/common';
import { JsonDBService } from './json-DB.service';
import { Entity } from './config/db.config';

@Global()
@Module({})
export class JsonDBModule {
  static forRoot(path: { path: string }): DynamicModule {
    return {
      module: JsonDBModule,
      providers: [
        {
          provide: 'DB_PATH',
          useValue: path,
        },
      ],
      exports: ['DB_PATH'],
    };
  }

  static forFeature(entities: Entity[]): DynamicModule {
    const providers = entities.map((value) => ({
      provide: value.name,
      useFactory: (path: { path: string }) => {
        return new JsonDBService<typeof value>(path, value);
      },
      inject: ['DB_PATH'],
    }));

    return {
      module: JsonDBModule,
      providers,
      exports: entities.map((entity) => entity.name),
    };
  }
}
