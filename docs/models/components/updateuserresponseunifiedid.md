# UpdateUserResponseUnifiedId

This object contains the updated details of the user record that was modified. It serves as a confirmation of the changes made to the user data in the CRM system. The structure includes various fields representing the user's updated information.

## Example Usage

```typescript
import { UpdateUserResponseUnifiedId } from "apideck/models/components";

let value: UpdateUserResponseUnifiedId = {
  id: "12345",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The unique identifier of the user record that was updated. This string value confirms the specific user entry that has been modified, ensuring developers can verify the correct record was altered. | 12345                                                                                                                                                                                                |