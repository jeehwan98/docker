import { SQSEvent, SQSBatchResponse, SQSBatchItemFailure } from "aws-lambda";

export const handler = async (event: SQSEvent): Promise<SQSBatchResponse> => {
  const failures: SQSBatchItemFailure[] = [];

  for (const record of event.Records) {
    try {
      const body = JSON.parse(record.body);
      console.log("Echo:", JSON.stringify(body));
    } catch (err) {
      console.error(`Failed to process message ${record.messageId}:`, err);
      failures.push({ itemIdentifier: record.messageId });
    }
  }

  return { batchItemFailures: failures };
};
