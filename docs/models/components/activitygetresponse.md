# ActivityGetResponse

Activity

## Example Usage

```typescript
import { ActivityGetResponse } from "apideck/models/components";

let value: ActivityGetResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
    activityDatetime: "2021-05-01T12:00:00.000Z",
    durationSeconds: 1800,
    userId: "12345",
    accountId: "12345",
    contactId: "12345",
    companyId: "12345",
    opportunityId: "12345",
    leadId: "12345",
    ownerId: "12345",
    campaignId: "12345",
    caseId: "12345",
    assetId: "12345",
    contractId: "12345",
    productId: "12345",
    solutionId: "12345",
    customObjectId: "12345",
    type: "meeting",
    title: "Meeting",
    description: "More info about the meeting",
    note: "An internal note about the meeting",
    location: "Space",
    locationAddress: {
      id: "123",
      type: "primary",
      string: "25 Spring Street, Blackburn, VIC 3130",
      name: "HQ US",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
      streetNumber: "25",
      city: "San Francisco",
      state: "CA",
      postalCode: "94104",
      country: "US",
      latitude: "40.759211",
      longitude: "-73.984638",
      county: "Santa Clara",
      contactName: "Elon Musk",
      salutation: "Mr",
      phoneNumber: "111-111-1111",
      fax: "122-111-1111",
      email: "elon@musk.com",
      website: "https://elonmusk.com",
      notes: "Address notes or delivery instructions.",
      rowVersion: "1-12345",
    },
    allDayEvent: false,
    private: true,
    groupEvent: true,
    eventSubType: "debrief",
    groupEventType: "Proposed",
    child: false,
    archived: false,
    deleted: false,
    showAs: "busy",
    done: false,
    startDatetime: "2021-05-01T12:00:00.000Z",
    endDatetime: "2021-05-01T12:30:00.000Z",
    durationMinutes: 30,
    activityDate: "2021-05-01",
    endDate: "2021-05-01",
    recurrent: false,
    reminderDatetime: "2021-05-01T17:00:00.000Z",
    reminderSet: false,
    videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
    videoConferenceId: "zoom:88120759396",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: 10,
      },
    ],
    attendees: [
      {
        id: "12345",
        name: "Elon Musk",
        firstName: "Elon",
        middleName: "D.",
        lastName: "Musk",
        prefix: "Mr.",
        suffix: "PhD",
        emailAddress: "elon@musk.com",
        isOrganizer: true,
        status: "accepted",
        userId: "12345",
        contactId: "12345",
        updatedAt: new Date("2017-08-12T20:43:21.291Z"),
        createdAt: new Date("2017-08-12T20:43:21.291Z"),
      },
    ],
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: "2020-09-30T07:43:32.000Z",
    createdAt: "2020-09-30T07:43:32.000Z",
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

| Field                                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The HTTP response status code returned by the server. This integer value indicates the result of the GET request made to retrieve CRM activity details. A status code of 200 signifies a successful operation, confirming that the requested activity data has been fetched correctly. This property is always included in the response to inform the client about the outcome of their request. | 200                                                                                                                                                                                                                                                                                                                                                                                              |
| `status`                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The HTTP response status message accompanying the status code. This string provides a textual representation of the status code, such as 'OK' for a 200 status. It helps in understanding the nature of the response at a glance and is included in every response to offer a human-readable status of the request outcome.                                                                      | OK                                                                                                                                                                                                                                                                                                                                                                                               |
| `service`                                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The Apideck ID of the service provider that processed the request. This string uniquely identifies which service within the Apideck ecosystem handled the CRM activity retrieval. It is crucial when multiple services are integrated, ensuring that the response is correctly attributed to the right service provider.                                                                         | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                         |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The name of the unified API resource that was accessed. This string indicates the specific resource within the Apideck platform that corresponds to the CRM activity data requested. It helps in identifying the type of resource being interacted with, ensuring clarity in multi-resource environments.                                                                                        | activities                                                                                                                                                                                                                                                                                                                                                                                       |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The specific operation performed during the API request. This string describes the action taken, such as 'retrieve' for fetching CRM activity details. It provides context about what was done in response to the request, aiding in understanding the sequence of operations within the API interaction.                                                                                        | one                                                                                                                                                                                                                                                                                                                                                                                              |
| `data`                                                                                                                                                                                                                                                                                                                                                                                           | [components.ActivityGetResponseData](../../models/components/activitygetresponsedata.md)                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                               | The main container object that holds all the detailed information about the specific CRM activity retrieved by the operation. This object is always included in the response to encapsulate all related properties of the activity, ensuring a structured and organized data format for easy access and manipulation.                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                  |