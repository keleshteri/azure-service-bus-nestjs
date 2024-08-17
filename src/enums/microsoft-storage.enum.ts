/**
 * Microsoft Storage Event Types
 * https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage?tabs=event-grid-event-schema#available-event-types
 */
export enum MicrosoftStorage {
  BlobCreated = 'Microsoft.Storage.BlobCreated',
  BlobDeleted = 'Microsoft.Storage.BlobDeleted',
  BlobRenamed = 'Microsoft.Storage.BlobRenamed',
  BlobTierChanged = 'Microsoft.Storage.BlobTierChanged',
  DirectoryCreated = 'Microsoft.Storage.DirectoryCreated',
  DirectoryDeleted = 'Microsoft.Storage.DirectoryDeleted',
  DirectoryRenamed = 'Microsoft.Storage.DirectoryRenamed',
}
