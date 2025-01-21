# CrmNotesUpdateRequest

## Example Usage

```typescript
import { CrmNotesUpdateRequest } from "apideck/models/operations";

let value: CrmNotesUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  updateNoteRequest: {
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

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The unique identifier of the activity to be deleted. This parameter is required to specify which activity record should be removed from the CRM system. Ensure that the ID corresponds to an existing activity to avoid errors. |                                                                                                                                                                                                                                 |
| `serviceId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | An optional identifier for the specific service to be called, such as 'pipedrive'. This is only required when multiple integrations are active, allowing the API to route the request to the appropriate service.               | salesforce                                                                                                                                                                                                                      |
| `raw`                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              | A boolean flag that determines whether to include the raw response in the output. This is primarily used for debugging purposes to gain insights into the API's response structure.                                             |                                                                                                                                                                                                                                 |
| `updateNoteRequest`                                                                                                                                                                                                             | [components.UpdateNoteRequest](../../models/components/updatenoterequest.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |