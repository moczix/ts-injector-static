import { AuthApi } from "../api/auth.api";
import { provide } from "../../../lib/decorators";

@provide
export class AuthRepository {

  
  constructor(private _authApi: AuthApi){}
}