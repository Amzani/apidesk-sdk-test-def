# ActivitiesListResponse

Activities

## Example Usage

```typescript
import { ActivitiesListResponse } from "apideck/models/components";

let value: ActivitiesListResponse = {
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
          value: {},
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | The HTTP response status code returned by the server. This integer value indicates the result of the HTTP request, such as 200 for success or 404 for not found. It is crucial for determining the outcome of the request and handling errors appropriately. Always included in the response to provide immediate feedback on the request's success or failure.                                                                           | 200                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | A textual representation of the HTTP response status. This string provides a human-readable explanation of the status code, such as 'OK' for 200 or 'Not Found' for 404. It complements the status code by offering a more descriptive context, aiding in debugging and logging processes. Always included to ensure clarity in the response outcome.                                                                                     | OK                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `service`                                                                                                                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | The Apideck ID of the service provider involved in the request. This string uniquely identifies the service provider that processed the request, which is essential when multiple services are integrated. It helps in tracking and managing requests across different service providers. Always included to ensure accurate identification of the service handling the request.                                                          | zoho-crm                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | The name of the unified API resource accessed by the request. This string indicates which specific resource within the API was targeted, such as 'activities' in this context. It is crucial for understanding the scope and focus of the request, especially when dealing with multiple resources. Always included to provide clear context about the resource involved in the operation.                                                | activities                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `operation`                                                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | The specific operation performed by the API request. This string describes the action taken, such as 'retrieve' or 'update', providing insight into the nature of the request. It is important for logging and auditing purposes, ensuring that the exact operation is clearly documented. Always included to specify the action executed by the API.                                                                                     | all                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                                                    | [components.ActivitiesListResponseData](../../models/components/activitieslistresponsedata.md)[]                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                        | An array containing the list of CRM activities retrieved by the request. Each element in this array represents a distinct activity record, providing detailed information about individual interactions or events logged in the CRM system. This array is always included in the response to ensure that the client receives the requested data, even if it is empty, indicating no activities were found for the given query parameters. |                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                                                    | [components.ActivitiesListResponseMeta](../../models/components/activitieslistresponsemeta.md)                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                        | This property contains metadata about the API response, providing additional context and information beyond the primary data payload. It is included in the response to assist with understanding the structure and status of the returned data, such as pagination details and request processing information. This metadata is particularly useful for developers when debugging or optimizing API interactions.                        |                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                                                   | [components.ActivitiesListResponseLinks](../../models/components/activitieslistresponselinks.md)                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                        | The 'links' object contains navigational URLs that assist in moving between different pages of the CRM activities dataset. This object is included in the response to provide direct access to the previous, current, or next pages, enhancing the ease of navigation for clients. It is particularly useful in user interfaces where quick access to different pages is required.                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                           |