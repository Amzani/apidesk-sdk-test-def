# ListNotesResponseMeta

Contains metadata about the response, including pagination details and other relevant information. This object helps in understanding the context of the returned data, such as how many items are included and navigation aids for paginated results.

## Example Usage

```typescript
import { ListNotesResponseMeta } from "apideck/models/components";

let value: ListNotesResponseMeta = {
  itemsOnPage: 50,
  cursors: {
    previous: "em9oby1jcm06OnBhZ2U6OjE=",
    current: "em9oby1jcm06OnBhZ2U6OjI=",
    next: "em9oby1jcm06OnBhZ2U6OjM=",
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `itemsOnPage`                                                                                                                                                                                    | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Indicates the number of note items returned in the current response page. This integer helps developers understand the volume of data retrieved and manage pagination effectively.               | 50                                                                                                                                                                                               |
| `cursors`                                                                                                                                                                                        | [components.ListNotesResponseCursors](../../models/components/listnotesresponsecursors.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Provides cursors for navigating between pages of results in the API. This object includes pointers to the next or previous pages, facilitating seamless data retrieval across multiple requests. |                                                                                                                                                                                                  |