import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app/app'

import { AppViewListener } from 'angular2/src/core/linker/view_listener';
import { DebugElementViewListener } from 'angular2/platform/common_dom';
import { bind } from 'angular2/core';

//bootstrap(AppComponent);
bootstrap(AppComponent, [
  bind(AppViewListener).toClass(DebugElementViewListener),
]);