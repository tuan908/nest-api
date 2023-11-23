export class WebhookBaseDto {
  event: string;
  appId: string;
  versionId: number;
  status: number;
  description?: string;
  timestamp?: number;
}
