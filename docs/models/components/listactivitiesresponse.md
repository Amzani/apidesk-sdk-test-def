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

| Field                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The HTTP response status code indicating the result of the API request. This integer value helps determine whether the request was successful (e.g., 200 for success) or if there was an error (e.g., 404 for not found). It is crucial for error handling and debugging in client applications.                                    | 200                                                                                                                                                                                                                                                                                                                                 |
| `status`                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | A string representation of the HTTP response status, such as 'OK' for a successful request or 'Not Found' for an error. This provides a human-readable status message that complements the status code, aiding in quick understanding of the response outcome.                                                                      | OK                                                                                                                                                                                                                                                                                                                                  |
| `service`                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The Apideck ID of the service provider from which the CRM activities are retrieved. This string identifier is essential for distinguishing between different service providers integrated with the Apideck platform, ensuring that the data source is correctly identified in the response.                                         | zoho-crm                                                                                                                                                                                                                                                                                                                            |
| `resource`                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The name of the unified API resource that was accessed, such as 'activities'. This string value helps developers understand which specific resource the operation was performed on, facilitating better organization and management of API interactions.                                                                            | activities                                                                                                                                                                                                                                                                                                                          |
| `operation`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The specific operation that was performed, represented as a string. For this GET request, it typically indicates the retrieval of data, helping developers track the type of action executed by the API call.                                                                                                                       | all                                                                                                                                                                                                                                                                                                                                 |
| `data`                                                                                                                                                                                                                                                                                                                              | [components.ListActivitiesResponseData](../../models/components/listactivitiesresponsedata.md)[]                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | An array containing a list of CRM activities. Each element in the array represents a single activity record, providing detailed information about customer interactions. This array is the primary container for the activity data returned by the API, allowing developers to iterate over and process each activity individually. |                                                                                                                                                                                                                                                                                                                                     |
| `meta`                                                                                                                                                                                                                                                                                                                              | [components.ListActivitiesResponseMeta](../../models/components/listactivitiesresponsemeta.md)                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | The 'meta' object contains metadata about the API response, providing additional context and information about the data returned. It typically includes pagination details and other relevant metadata that help in understanding the scope and limits of the response.                                                             |                                                                                                                                                                                                                                                                                                                                     |
| `links`                                                                                                                                                                                                                                                                                                                             | [components.ListActivitiesResponseLinks](../../models/components/listactivitiesresponselinks.md)                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | The 'links' object contains URLs for navigating between pages of results in the API response. It includes links to the current and previous pages, facilitating easy access to different parts of the dataset.                                                                                                                      |                                                                                                                                                                                                                                                                                                                                     |