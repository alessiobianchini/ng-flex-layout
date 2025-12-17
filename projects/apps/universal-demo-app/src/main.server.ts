import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule };
export default AppServerModule;
