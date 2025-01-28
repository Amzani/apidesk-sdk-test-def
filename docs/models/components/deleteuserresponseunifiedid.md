# DeleteUserResponseUnifiedId

This object contains information about the user resource that was deleted. It serves as a confirmation that the specified user has been successfully removed from the CRM system. The object includes the unique identifier of the deleted user, ensuring that developers can verify the correct user was deleted.

## Example Usage

```typescript
import { DeleteUserResponseUnifiedId } from "apideck/models/components";

let value: DeleteUserResponseUnifiedId = {
  id: "12345",
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              | Example                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The unique identifier of the user that was deleted. This ID confirms the specific user record that has been removed from the CRM system, allowing developers to track and verify the deletion operation. | 12345                                                                                                                                                                                                    |