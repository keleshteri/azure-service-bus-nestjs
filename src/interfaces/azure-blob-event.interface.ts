/**
 * Azure Blob Event Interface
 */
export interface AzureBlobEvent {
  topic: string;
  subject: string;
  eventType: string;
  id: string;
  data: {
    api: string;
    requestId: string;
    contentType: string;
    blobType: string;
    blobUrl: string;
    url: string;
    sequencer: string;
    identity: string;
    storageDiagnostics: {
      batchId: string;
    };
  };
  dataVersion: string;
  metadataVersion: string;
  eventTime: string;
}
