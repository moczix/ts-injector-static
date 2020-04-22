import { module, provide } from "../../../lib/decorators";
import { AuthRepository } from "./auth.repository";
import { AuthApi } from "../api/auth.api";

@module
export class RepositoryModule {

  @provide()
   public provideAuthRepository = (authApi: AuthApi): AuthRepository => new AuthRepository(authApi)

}