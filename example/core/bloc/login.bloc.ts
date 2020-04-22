import { provide } from "../../../lib/decorators";
import { AuthRepository } from "../repository/auth.repository";

@provide
export class LoginBloc {
  constructor(private _authRepository: AuthRepository) {}
}
