import { module, provide } from "../../../lib/decorators";
import { AuthApi } from "./auth.api";

@module
export class ApiModule {
    @provide()
    public provideAuthApi = (): AuthApi => new AuthApi()
}