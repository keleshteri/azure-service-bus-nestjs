import { registerAs } from '@nestjs/config';

/**
 * registerAs
 */
export const AzureServiceBusConfig = registerAs(
  'azure.serviceBus',
  (): Record<string, any> => ({
    connectionString: process.env.AZURE_SERVICE_BUS_CONNECTION_STRING,
  }),
);
