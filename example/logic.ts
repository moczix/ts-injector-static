import { Injector } from "../lib/decorators";
import { RepositoryModule } from "./core/repository/repository.module";
import { ApiModule } from "./core/api/api.module";
import { LoginBloc } from "./core/bloc/login.bloc";

const injectorModules = [RepositoryModule, ApiModule];

@Injector(injectorModules)
export abstract class Logic {

  public static create(modules: any[]) {

  }

  public abstract provideLoginBloc(): LoginBloc;

}

