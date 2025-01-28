# ListActivitiesResponse

Activities

## Example Usage

```typescript
import { ListActivitiesResponse } from "apideck/models/components";

let value: ListActivitiesResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "all",
  data: [
    {
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
          value: [
            {},
          ],
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The HTTP response status code indicating the result of the API request. This integer value helps determine if the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is essential for error handling and debugging in client applications. | 200                                                                                                                                                                                                                                                                                           |
| `status`                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | A textual representation of the HTTP response status. This string provides a human-readable status message corresponding to the status code, such as 'OK' for a successful request or 'Not Found' for a missing resource. It aids in understanding the outcome of the API call at a glance.   | OK                                                                                                                                                                                                                                                                                            |
| `service`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The Apideck ID of the service provider from which the CRM activities are retrieved. This string uniquely identifies the third-party service integrated with the Apideck platform, facilitating multi-service management and data aggregation.                                                 | zoho-crm                                                                                                                                                                                                                                                                                      |
| `resource`                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The name of the unified API resource accessed by this operation. This string indicates the specific CRM resource type, such as 'activities', that the API call interacts with, ensuring developers understand the context of the data returned.                                               | activities                                                                                                                                                                                                                                                                                    |
| `operation`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                            | The specific operation performed by the API request, represented as a string. This field indicates the action taken, such as 'fetch' or 'retrieve', helping developers track the type of request made and its purpose within the CRM system.                                                  | all                                                                                                                                                                                                                                                                                           |
| `data`                                                                                                                                                                                                                                                                                        | [components.ListActivitiesResponseData](../../models/components/listactivitiesresponsedata.md)[]                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                            | An array containing all the CRM activities retrieved by the API call. Each element in the array represents a single activity with its associated details, facilitating comprehensive data management and integration within CRM systems.                                                      |                                                                                                                                                                                                                                                                                               |
| `meta`                                                                                                                                                                                                                                                                                        | [components.ListActivitiesResponseMeta](../../models/components/listactivitiesresponsemeta.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | The 'meta' object contains metadata about the response, providing additional context and information about the data returned. This can include pagination details, cursors, and other relevant metadata that aids in understanding the structure and limits of the response data.             |                                                                                                                                                                                                                                                                                               |
| `links`                                                                                                                                                                                                                                                                                       | [components.ListActivitiesResponseLinks](../../models/components/listactivitiesresponselinks.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                            | The 'links' object contains URLs that facilitate navigation between different pages of results in the API response. It includes links to the current, previous, and next pages, helping developers manage data pagination effectively.                                                        |                                                                                                                                                                                                                                                                                               |