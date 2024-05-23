/* eslint-disable @typescript-eslint/no-namespace */
import { SchemaTypes } from '@pothos/core';
import type { MyPlugin } from './index.js';

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      myPlugin: MyPlugin<Types>;
    }
  }
}
