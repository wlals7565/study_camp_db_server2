// // src/auth/error-logging/error-logging.service.ts
// import {
//   ExceptionFilter,
//   Catch,
//   ArgumentsHost,
//   HttpException,
// } from '@nestjs/common';
// import * as Sentry from '@sentry/node';
// import { SlackService } from './slack/slack.service';

// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter {
//   constructor(private slackService: SlackService) {}

//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();
//     const request = ctx.getRequest();
//     const status =
//       exception instanceof HttpException ? exception.getStatus() : 500;

//     // Sentry에 예외 로깅
//     Sentry.captureException(exception);

//     // Slack에 예외 로깅
//     if (exception instanceof Error) {
//       this.slackService.sendMessage(
//         '#error-log',
//         `에러 발생: ${exception.message}`,
//       );
//     }

//     response.status(status).json({
//       statusCode: status,
//       timestamp: new Date().toISOString(),
//       path: request.url,
//     });
//   }
// }

// src/auth/error-logging/error-logging.service.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { SlackService } from './slack/slack.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private slackService: SlackService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    // Sentry에 예외 로깅
    Sentry.captureException(exception);

    // Slack에 예외 로깅
    if (exception instanceof Error) {
      this.slackService.sendMessage(
        `Nest 서버 에러 발생: ${exception.message}`,
      );
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
