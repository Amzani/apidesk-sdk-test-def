# HrisEmployeesUpdateCustomFields

## Example Usage

```typescript
import { HrisEmployeesUpdateCustomFields } from "apideck/models/operations";

let value: HrisEmployeesUpdateCustomFields = {
  id: "2389328923893298",
  name: "employee_level",
  description: "Employee Level",
  value: true,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | Unique identifier for the custom field. | 2389328923893298                        |
| `name`                                  | *string*                                | :heavy_minus_sign:                      | Name of the custom field.               | employee_level                          |
| `description`                           | *string*                                | :heavy_minus_sign:                      | More information about the custom field | Employee Level                          |
| `value`                                 | *operations.HrisEmployeesUpdateValue*   | :heavy_minus_sign:                      | N/A                                     |                                         |