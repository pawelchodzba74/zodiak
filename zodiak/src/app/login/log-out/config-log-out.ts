
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { LayoutService } from '../../shared/services/layout.service';
import { TokenService } from '../../auth/token.service';
@Injectable()
export class LogOutGlobalConfig {
  constructor(
    public layoutService: LayoutService,
    public authService: AuthService,
    public tokenService: TokenService
  )  {
    this.config = this.createConfig;
  }
  config;
  get createConfig() {
      return {
      services: [
        {
          obj: this.authService,
          method: 'logOut'
        },
        {
          obj: this.tokenService,
          method: 'delete'
        },
        {
          obj: this.layoutService,
          method: 'impossibleWithoutLogging'
        }
      ],
      rout: {
        path: 'room',
        param: ''
      }
    };
  }
  setConfig(DataConfig) {
    this.config = Object.assign({}, this.createConfig, DataConfig);
  }
}
