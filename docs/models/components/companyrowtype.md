# CompanyRowType

Specifies the type of company record being added. This object can include additional details such as the company's unique identifier and name, helping to categorize and manage different company types within the CRM. It is optional but can be used to provide more structured data about the company.

## Example Usage

```typescript
import { CompanyRowType } from "apideck/models/components";

let value: CompanyRowType = {
  id: "12345",
  name: "Customer Account",
};
```

## Fields

| Field                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                    | A unique identifier for the type of company being added. This ID helps in distinguishing between different company types and is useful for integrations that require specific type handling. It is optional and should be a valid string if provided. | 12345                                                                                                                                                                                                                                                 |
| `name`                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                    | The name of the company type. This field allows you to specify a human-readable name for the company type, aiding in the organization and retrieval of company records. It is optional and should be a valid string if provided.                      | Customer Account                                                                                                                                                                                                                                      |