# ContactsOneWebsites

## Example Usage

```typescript
import { ContactsOneWebsites } from "apideck/models/operations";

let value: ContactsOneWebsites = {
  id: "12345",
  url: "http://example.com",
  type: "primary",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | Unique identifier for the website                                                        | 12345                                                                                    |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | The website URL                                                                          | http://example.com                                                                       |
| `type`                                                                                   | [operations.ContactsOneContactsType](../../models/operations/contactsonecontactstype.md) | :heavy_minus_sign:                                                                       | The type of website                                                                      | primary                                                                                  |