import { DynamicModule, Module } from '@nestjs/common';
import {
  AzureSBSenderReceiverOptions,
  AzureServiceBusModule,
} from './azure-service-bus.module';
import { ConfigService } from '@nestjs/config';

/**
 * EventBusModule
 */
@Module({
  imports: [
    AzureServiceBusModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        connectionString:
          configService.get<string>('azure.serviceBus.connectionString') ||
          configService.get<string>('AZURE_SERVICE_BUS_CONNECTION_STRING') ||
          process.env.AZURE_SERVICE_BUS_CONNECTION_STRING,
      }),
      inject: [ConfigService],
    }),
    // AzureServiceBusModule.forFeature({
    //   senders: ['test_blob'],
    //   receivers: ['test_blob'],
    // }),
  ],
  // providers: [EventPublisherService, EventListenerService],
  // exports: [EventPublisherService, EventListenerService],
})
export class EventBusModule {
  // temporary options type is AzureSBSenderReceiverOptions, if we have more event bus serivces, we can create a new type
  /**
   * Creates a dynamic module for the event bus feature.
   * @param options - The options for the Azure Service Bus sender and receiver.
   * @returns A dynamic module configuration.
   */
  static forFeature(options: AzureSBSenderReceiverOptions): DynamicModule {
    return {
      module: EventBusModule,
      imports: [AzureServiceBusModule.forFeature(options)],
    };
  }
}
