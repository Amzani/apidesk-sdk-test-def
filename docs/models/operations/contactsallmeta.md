# ContactsAllMeta

Response metadata

## Example Usage

```typescript
import { ContactsAllMeta } from "apideck/models/operations";

let value: ContactsAllMeta = {
  itemsOnPage: 50,
  cursors: {
    previous: "em9oby1jcm06OnBhZ2U6OjE=",
    current: "em9oby1jcm06OnBhZ2U6OjI=",
    next: "em9oby1jcm06OnBhZ2U6OjM=",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `itemsOnPage`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | Number of items returned in the data property of the response                  | 50                                                                             |
| `cursors`                                                                      | [operations.ContactsAllCursors](../../models/operations/contactsallcursors.md) | :heavy_minus_sign:                                                             | Cursors to navigate to previous or next pages through the API                  |                                                                                |