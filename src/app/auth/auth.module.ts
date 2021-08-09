import { NgModule, Optional, SkipSelf } from '@angular/core';
// import { AuthGuard } from './Guard/auth.guard';
import { TokenInterceptor, TokenInterceptorProvider } from './interceptors/token.inceptor';

import { AuthService } from './services/auth.service';

@NgModule({
  providers: [
    // Guards
    // AuthGuard,
    // Services
    AuthService,
    // Interceptors
    TokenInterceptor,
  ]
})
export class AuthModule { 
  constructor(@Optional() @SkipSelf() self: AuthModule) {
    if(self) {
      throw new Error("AuthModule shouldn't be imported more than once!");
    }
  }
}