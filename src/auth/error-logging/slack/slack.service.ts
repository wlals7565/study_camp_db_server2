// // src/auth/error-logging/slack/slack.service.ts
// import { Injectable } from '@nestjs/common';
// import { WebClient } from '@slack/client';

// @Injectable()
// export class SlackService {
//   private webClient: WebClient;

//   constructor() {
//     this.webClient = new WebClient(
//       'https://hooks.slack.com/services/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',
//     ); // Slack 토큰으로 교체
//   }

//   async sendMessage(channel: string, text: string) {
//     console.log('sendMessage', channel);
//     console.log('text', text);
//     try {
//       await this.webClient.chat.postMessage({ channel, text });
//     } catch (error) {
//       console.error('Slack API 호출 실패:', error);
//       // Sentry.captureException(error); // 필요한 경우 Sentry로도 로깅
//     }
//   }
// }

// src/auth/error-logging/slack/slack.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SlackService {
  private webhookUrl: string;

  constructor(private configService: ConfigService) {
    this.webhookUrl = configService.get<string>('SLACK_WEBHOOK_URL'); // Slack Webhook URL로 교체
  }

  async sendMessage(text: string) {
    try {
      await axios.post(
        this.webhookUrl,
        {
          text: text,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      console.log('Slack에 메시지 전송 완료');
    } catch (error) {
      console.error('Slack Webhook 호출 실패:', error);
    }
  }
}
