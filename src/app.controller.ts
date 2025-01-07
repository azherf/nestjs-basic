import { Controller, Get } from '@nestjs/common';

@Controller("/app")
export class AppController {
  @Get("/hello")
  getRootRoute(): string {
    return "Hello World!";
  }

  @Get("/goodbye")
  getGoodbyeRoute(): string {
    return "Goodbye!";
  }
}