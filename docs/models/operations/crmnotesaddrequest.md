# CrmNotesAddRequest

## Example Usage

```typescript
import { CrmNotesAddRequest } from "apideck/models/operations";

let value: CrmNotesAddRequest = {
  serviceId: "salesforce",
  createNoteRequest: {
    title: "Meeting Notes",
    content: "Office hours are 9AM-6PM",
    ownerId: "12345",
    contactId: "12345",
    companyId: "12345",
    opportunityId: "12345",
    leadId: "12345",
    active: true,
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                             | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       | Example                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                | A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.                               |                                                                                                                                                                                                                   |
| `serviceId`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service. | salesforce                                                                                                                                                                                                        |
| `createNoteRequest`                                                                                                                                                                                               | [components.CreateNoteRequest](../../models/components/createnoterequest.md)                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                | N/A                                                                                                                                                                                                               |                                                                                                                                                                                                                   |