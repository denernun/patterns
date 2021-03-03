import express from 'express';
import { Server } from 'http';
import router from './routes/routes';
import './util/module-alias';

export class SetupApplication {
  private server?: Server;

  constructor(private port = 3000, public app = express()) {}

  public init(): void {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    this.app.use(router);
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
